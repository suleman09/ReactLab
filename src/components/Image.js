import "./Image.css";

function Image() {
    return <div className="content-container">
        <div className="row">
            <div className="left-panel box">
            <img className='image' src="https://images.shiksha.com/mediadata/images/1553752427phpvP6G9K.png" alt="BigCo Inc. logo"/>
            </div>
            
            <div className="right-panel box">
                <div className="container" >
                <h1>  Know more about the Institute</h1>
                <p>
                   Welcome to V.E.S Institute of Technology<br />
                   We create professionals here !
                  </p>
                  <button className ="button">
                    Read more
                  </button>
                    </div>           
                     </div>
       </div>
    </div>
}
export default Image;