import '../css/home.css';

export default function slideImage (props) {
    const title = props.text;
    const image = props.image;
    return (
      <>
      <a ><img className='imagesSites' src={image}/></a>
      <p className='title-slide' >{title}</p>
      </>
    )
  }