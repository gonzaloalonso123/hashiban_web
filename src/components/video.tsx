import '../styles/App.css';
import frame from '../images/frame.png';

function Video() {
  return (
	<div className='video-section'>
		<div className='video'>
			<img className='frame' src={frame} alt=''/>
		</div>
	</div>
  );
}

export default Video;