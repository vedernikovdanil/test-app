import Button from "../components/UI/Button";

function Btn({ bg }) {
  return (
    <Button bg={bg} className="text-uppercase">
      {bg}
    </Button>
  );
}

function Home() {
  return (
    <>
      <h1>Hello world</h1>
      <div className="d-flex flex-wrap gap-3">
        <Btn bg="primary" />
        <Btn bg="secondary" />
        <Btn bg="info" />
        <Btn bg="success" />
        <Btn bg="danger" />
        <Btn bg="warning" />
        <Btn bg="dark" />
        <Btn bg="light" />
      </div>
      <br />
      <a href="https://github.com">github.com</a>
    </>
  );
}

export default Home;
