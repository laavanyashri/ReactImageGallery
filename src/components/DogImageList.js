import one from "../assests/images/Dog1.jpg"
import two from "../assests/images/Dog2.jpg"
import three from "../assests/images/Dog3.jpg"
import four from "../assests/images/Dog4.jpg"
import five from "../assests/images/Dog5.jpg"
import six from "../assests/images/Dog6.jpg"
import seven from "../assests/images/dog7.jpg"
import eight from "../assests/images/dog8.jpg"

function DogImageList()
{    var arrimages = [one, two, three, four, five, six, seven, eight]
   
           return (<>
           { arrimages.map(function (item) {
          return <DogImages imgpath={item}></DogImages>
        })}
        </>)
   
}


function DogImages(props) {
    return (
        <div className="dogimage">
         <img src={props.imgpath} alt="dogimage"></img> 
        </div>
    )

}


export default DogImageList