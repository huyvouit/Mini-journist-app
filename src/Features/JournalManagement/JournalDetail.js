import React,{useState} from "react";
import { useParams } from "react-router-dom";

const JournalDetail = ({ data,deleTe }) => {
    const { productId } = useParams();
    const product = data.find((p) => p.id === Number(productId));
    let productData;
    
    const [text,setText] = useState(product);

    const update = () => {
      product.name = text.name;
      product.description = text.description; 
     
    }
    const reset = () => {
      text.name =product.name;
      text.description= product.description;  
    
    }
    if (product) {
      reset();
     productData = (
        <div >
           <div className="journal-detail-wrapper">
              <div className="journal-detail-form">
          <div className="form-group">
            <label>Title</label>
            <br />
            <input type="text" onChange={ (e) => { setText({...text,name:e.target.value})}}
              className="title-input-field"
              placeholder="Journal Title"
              value={text.name}
             > 
            </input>
          </div>
          <div className="form-group">
            <label>Description</label>
            <br />
            <textarea onChange={ (e) => { setText({...text,description:e.target.value})}}
              className="description-input-field"
              rows="10"
              placeholder="Journal Description"
              value={text.description}
              >
            </textarea>
          </div>
          <div>
            <button className="button-save-journal" onClick={() => {
                update();
               // reset();
                console.log(text);
              }}
                >Save</button>
            <button className="button-save-journal"
              onClick={()=> deleTe(productId)
            }>Delete</button>
          </div>
        </div>
          </div>
         
        </div>
      );
    } else {
      productData = <h2>Sorry. Product doesn't exist</h2>;
     }
    return(
     <div>
       {productData}
       
      </div>
  )
};



export default JournalDetail;
