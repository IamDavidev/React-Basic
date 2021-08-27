// => JavaScript Vanilla
const $app = document.querySelector(".app");
const avatar = (params) => {
  const src = `https://randomuser.me/api/portraits/lego/${params.id}.jpg`;
  return `
    <picture>
        <img src='${src}' /> 
        <h4> ${params.nombre} </h4>
    </picture>
    `;
};

for (let i = 0; i < 9; i++) {
  $app.innerHTML += avatar({ id: i, nombre: `Avatar ${i + 1}` });
}

$app.querySelectorAll("img").forEach((img) => {
  img.addEventListener("click", () => {
    img.classList.toggle("desbanecer");
  });
});

//React

const $main = document.querySelector(".main");
const R = React.createElement;
const useState = React.useState;

const Avatares = ({ id, name = `user ${id}`, size }) => {
  const src = `https://randomuser.me/api/portraits/lego/${id}.jpg`;
  const [enable, setEnable] = useState(true);
  // primera forma sin JSX ==> return R('img',{src,h2:'avatar'})
  const clasName = enable ? "" : "desbanecer";
  const pictureClassName = size === "small" ? "is-small" : "";
  return (
    <picture className={pictureClassName}>
      {id ? (
        <img
          onClick={() => {
            setEnable(!enable);
          }}
          className={clasName}
          src={src}
        />
      ) : (
        <img src="https://randomuser.me/api/portraits/men/1.jpg" />
      )}
      <h4> {enable ? name : "desactivada"} </h4>
    </picture>
  );
};

// ReactDOM.render(R(avatares, { id: 6 }), $main);
ReactDOM.render(
  <div>
    <Avatares id={1} name="avatar 1 " size="small" />
    <Avatares id={2} name="avatar 2" />
    <Avatares size="small" />
  </div>,
  $main
);
