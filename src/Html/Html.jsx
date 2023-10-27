
import Audio1 from './Audio/Jailer.mp3'
const Html=()=>{
  return(  
    <div>
        <h1>Welcome to Html</h1>
        <img src="https://www.hindustantimes.com/ht-img/img/2023/09/19/550x309/Rajinikanth-s-Jailer-was-released-over-the-weekend_1695094483358_1695094535793.png" alt="" height={"500px"}width={"49%"} />
     
        {/* <img src={Image1} Target={'_blank'}  alt="" width={"49%"} rel=""  height={"500px"}/> */}
        <h1>anchor</h1>
        <a href="https://www.flipkart.com/" target={'_blank'} > Enter Flipkart</a>
        <br />
        <iframe width="560" height="315" src="https://www.youtube.com/embed/IqwIOlhfCak?si=U31GEk-Ipoob-OD9" title="YouTube video player"  ></iframe>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4964044841404!2d73.9111262748182!3d18.506456682584286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c1c1fceb8377%3A0xb160caad3213fedf!2sKumar%20Primus!5e0!3m2!1sen!2sin!4v1696922013352!5m2!1sen!2sin" width="600" height="450" title='map' ></iframe>
        <br />
        <h1>Media Tag</h1>
        <audio src={Audio1} controls></audio>
    </div>
  )
}
export default Html