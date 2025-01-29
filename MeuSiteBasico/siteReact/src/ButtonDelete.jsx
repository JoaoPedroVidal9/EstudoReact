function ButtonDelete() {
  const deletar = () => {
    alert("Confirmação de deleção");
  };

  return (
    <button
      style={{
        padding: "15px, 25px",
        backgroundColor: "red",
        borderRadius: "5px",
        margin: "10px, 10px",
      }}
      onClick={deletar}
    >
      Apagar Objeto
    </button>
  );
}
export default ButtonDelete;
