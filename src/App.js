import { IonButton, setupIonicReact, useIonToast } from '@ionic/react';

import '@ionic/react/css/core.css';

setupIonicReact();

function App() {
  const [presentToast] = useIonToast();

  const handleClick = () => {
    presentToast({
      message: 'Hello world!',
      duration: 1500,
    });
  };

  return (
    <div>
      <header>
        <h1>My App</h1>
      </header>
      <main>
        <IonButton onClick={handleClick}>
          Click Me
        </IonButton>
      </main>
    </div>
  );
}

export default App;
