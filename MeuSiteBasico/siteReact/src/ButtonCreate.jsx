function ButtonCreate() {
  const create = () => {
    alert("Confirmação de criação");
  };

  return (
    <button
      style={{
        padding: "15px, 25px",
        backgroundColor: "green",
        borderRadius: "5px",
        margin: "10px, 10px",
      }}
      onClick={create}
    >
      Criar Objeto
    </button>
  );
}
export default ButtonCreate;
