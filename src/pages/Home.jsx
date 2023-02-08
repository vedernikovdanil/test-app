import Button from "../components/UI/Button";

function Home() {
  return (
    <>
      <h1>Hello world</h1>
      <div className="d-flex flex-column gap-3 w-fit">
        <Button>Default</Button>
        <Button.Secondary>Secondary</Button.Secondary>
        <Button.Success>Success</Button.Success>
        <Button.Danger>Danger</Button.Danger>
        <Button.Warning>Warning</Button.Warning>
      </div>
    </>
  );
}

export default Home;
