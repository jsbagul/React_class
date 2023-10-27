import Video1 from './Video/earth.mp4'
const Project=()=>{
    return(
        <div>
             <nav>
                <a href="#home">Home</a> 
                <a href="#about">About</a>
                <a href="#gallary">gallary</a>
                <a href="#video">Video</a>
                <a href="#table">Table</a>
             </nav>


             <div>
               <center><h1 id="home">Home</h1></center>
               <img src="https://cdn.pixabay.com/photo/2016/11/25/23/15/moon-1859616_1280.jpg" alt="" width="100%" height="690"></img>
               <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas, ex amet quam provident accusantium non, labore, officia asperiores similique tenetur fugit dolores aspernatur praesentium exercitationem animi recusandae omnis possimus veniam ducimus reprehenderit corrupti vitae. Incidunt culpa voluptatum eum officiis enim adipisci, animi totam officia architecto laudantium temporibus harum reprehenderit assumenda est facilis aliquam dolorum fuga dolores quae. Fuga magnam autem porro adipisci, doloribus quam ipsam repudiandae dolore, earum facere, quidem culpa recusandae molestiae quos asperiores. Labore ducimus error, temporibus ut ab facere quaerat placeat impedit quas asperiores minima doloremque maxime architecto, consequuntur quidem? Delectus facere fugiat voluptates vitae laborum laboriosam et saepe dolorem sapiente ex velit, nemo quam cum laudantium soluta nam quia aliquid ipsum quasi harum fuga quas vel, asperiores consequatur. Culpa placeat maxime sunt asperiores ipsum ad laudantium rerum voluptatum, eius nesciunt deserunt recusandae, molestias tempora. Tempore eveniet minima maxime id doloremque sed autem aliquam repudiandae ipsum odio, sunt ducimus consectetur modi impedit est ut rerum totam quisquam quasi laboriosam, quaerat omnis cum nulla! Odit ipsum odio sunt facilis, eaque beatae aut, nobis nam unde velit ex debitis voluptate quam doloribus necessitatibus veritatis porro! Quae, rem. Facere maiores, ad eveniet excepturi hic atque, nostrum quasi reiciendis dicta doloremque repudiandae! Et consequuntur fuga excepturi doloremque, provident quisquam quaerat rerum laboriosam inventore deserunt, porro hic dignissimos natus aliquid fugit exercitationem aperiam? Porro corporis, doloribus aperiam odio ipsum id. Molestias, delectus harum? Earum, placeat laboriosam odio illo optio beatae repellat ullam officia odit reiciendis labore! Ullam ipsam at blanditiis ab fugiat repellat dicta quisquam, vel asperiores distinctio beatae? Delectus sapiente voluptate quaerat quidem dolor, ipsum rerum optio adipisci laudantium! Rem explicabo ratione debitis tempore ad qui consectetur aliquid recusandae assumenda, nam accusantium similique? Delectus non ipsa doloremque? Fuga excepturi temporibus tempora incidunt voluptate, necessitatibus exercitationem ipsam quibusdam reprehenderit, sapiente maxime molestiae.</p>   
            </div>
        
            <div>
              <center> <h1 id="about">About</h1> </center>
              <center>
              <iframe width="80%" height="700" src="https://www.youtube.com/embed/IqwIOlhfCak?si=JeW3NAMKRj0-pvkX" title="YouTube video player"></iframe> 
              </center>
            </div>

        <div>
            <center><h1 id="gallary">Gallary</h1></center>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1oPQpFmCcyHqI7aIoyzzHmunjOv6N0hbx-85Rz18xAtNlriWcMaixWK9w0PpLknP9K4RL&s" alt="" width={"49%"} height={"500px"} ></img>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFPBoBuubcFEXr4zPirFZMJKQU38GWY7VlffwY8J4eQ9oF92sOGwJbj9yyZVACSaLZss&usqp=CAU" alt="" width={"49%"} height={"500px"} ></img>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5LSJxt7o9xyAlmgsL7nIXm_ZmjWAQvIw-vJVTjDSDQGAqclj3xuqIRNKR34VwGEAIuDE&usqp=CAU" alt="" width={"49%"} height={"500px"} ></img>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm97tnI72l6oniPrc7oLth94EQa1ld1-gRMlopwn7BKlohNte9-l3VnFHIsG0-flJB1cY&usqp=CAU" alt="" width={"49%"} height={"500px"} ></img>
        </div>

        <div>
            <center><h1 id="video">Video</h1></center>
            <video src={Video1} controls></video>
        </div>

        <footer>
        <h1 id="table">Table</h1>
            <table border={1} cellSpacing={'20px'} cellPadding={'20px'} width="100%">
                <thead>
                    <tr>
                        <th>slno</th>
                        <th>Name</th>
                        <th>Sal</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>01</td>
                        <td>A</td>
                        <td>10</td>
                    </tr>
                    <tr>
                        <td>02</td>
                        <td>B</td>
                        <td>20</td>
                    </tr>
                    <tr>
                        <td>03</td>
                        <td>C</td>
                        <td>30</td>
                    </tr>
                </tbody>
                    <tfoot>

                        <tr >
                            <td colSpan={3}>abc123@email.com</td>
                        </tr>
                    </tfoot>
            </table>
        </footer>

        </div>
    )
}
export default Project