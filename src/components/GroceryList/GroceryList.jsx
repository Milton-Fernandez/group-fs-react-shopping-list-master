import './GroceryList.css';

function GroceryList({groceryArray}){
    
return(
   
    <>
        <h1>Shopping List</h1>
        {groceryArray.map((grocery) =>(
        <div class = "block">
            <p>{grocery.name}</p>
            <p>{grocery.quantity}{grocery.unit}</p>
            {grocery.purchase ? 
            <p>Purchased</p>:
            <div> 
                <button data-buyid={grocery.id}>Buy</button>
                <button data-removeid={grocery.id}>Remove</button>
            </div>
            }
        </div>
             ))}
    </>
)

}

export default GroceryList

/* 
                <h1>Shopping List</h1>
                <button id="reset">Reset</button>
                <button id="clear">Clear</button>
                <br></br>
                <br></br>
                {groceryArray.map((grocery) => (
                    <div class="block">
                        <p>{grocery.name}</p>
                        <p>{grocery.quantity}{grocery.unit}</p>
                        <button id="buy">Buy</button>
                        <button id="remove">Remove</button>
                    </div>
                ))}
*/