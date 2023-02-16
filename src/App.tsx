import Footer from './components/Footer';
import Page from './components/Page';
import Header from './components/Header';

function App(): JSX.Element {
  return (
    <>
      <div className="h-screen flex flex-col bg-yellow-400">
        <div className="flex gap-5">
          <Header></Header>
        </div>
        <div className="flex flex-1 mx-8 p-4  gap-8">
          <Page></Page>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
