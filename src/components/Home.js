import {Navigation} from "./Navigation";
import Image from "./Image";
import Card from "./Card";
import  Contact from "./Contact";


function Home() {
  return (
    <div >
    <Navigation/>
    <Image/>

    <div style={{ width: '100%', display: 'flex', justifyContent: "space-between", alignItems: 'center' }}>
   
    <Card
          img="http://csuonline-blog.azurewebsites.net/wp-content/uploads/2020/04/Computer-Science.jpg"
          name="Computer-Science"
          desc="An introduction to the intellectual enterprises of computer science and the art of programming."
        />
        <Card
          img="https://www.digitalbusiness.africa/wp-content/uploads/2020/03/cyber-assurance-telecommunication.jpg"
          name="Electronics and Telecommunication"
          desc="Electronics and Telecommunication Engineering subjects such as analog electronics, linear integrated circuits, network analysis and synthesis, and digital signal processing provide the students with adequate knowledge to design , test, and maintain communication systems."
         
        />
        <Card
          img="https://manavrachna.edu.in/wp-content/uploads/2022/06/img.png"
          name="Information Technology"
          desc="Information Technology (IT) is the application of technology to solve organizational and business problems. This field of engineering uses computers, networks, storage, and other technical infrastructure both hardware and software, to deal with and manipulate information/data."
          
        />
      
        
    </div>
    </div>
  );
}

export default Home;
