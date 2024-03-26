import Card from "./(components)/Card/Card";
import Header from "./(components)/Header";
import Hero from "./(components)/Hero";

export default function Home() {
  return (
    <main>
      <Header />
      <div>
        <Hero />
        <Card />
      </div>
    </main>
  );
}
