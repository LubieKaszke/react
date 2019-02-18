import * as React from 'react';
import FileUploader from './Components/FileUploader';
import './styles/app.css';


class App extends React.Component {
  public render() {
    return (
      <div>
        <FileUploader/>
      </div>
    );
  }
}

export default App;
