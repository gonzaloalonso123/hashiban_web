import './video.css';
import Frame from '../../images/frame.png';

function Video() {
  return (
	<div className='video-section'>
		<div className='video'>
			<img className='frame' src={Frame} alt=''/>
		</div>
	</div>
  );
}

export default Video;