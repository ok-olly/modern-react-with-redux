import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png';
import CortanaImage from './images/cortana.png';
import SiriImage from './images/siri.png';

// 9.7KB 이상인 이미지 파일을 import해오면 외부 파일 그 자체로 처리되고
// 이하인 파일을 가져오면 base64로 인코딩되어 js파일에 인라인으로 들어간다.
// 폰트나 소리 파일도 마찬가지.
console.log(AlexaImage);
console.log(SiriImage);

function App() {
  return (
    <div>
      <div>Personal Digital Assistants</div>

      <img src={AlexaImage}></img>
      <img src={SiriImage}></img>

      <ProfileCard title="Alexa" handle="@alexa99" />
      <ProfileCard title="Cortana" handle="@cortana32" />
      <ProfileCard title="Siri" handle="@siri01" />
    </div>
  );
}

export default App;
