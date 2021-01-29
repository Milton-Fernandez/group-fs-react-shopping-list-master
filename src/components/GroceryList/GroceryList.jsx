import './GroceryList.css';

function GroceryList({setIdOfItem, getOneItem, groceryArray, deleteItem, setPurchased, deleteShoppingHistory, resetShoppingCart}){
    
return(
    <>
        <h1>Shopping List</h1>
        <div id="buttons">
        <button id="reset" class="btn btn-warning" onClick = {() => resetShoppingCart()}>Reset</button>
        <button id="clear" class="btn btn-danger" onClick= {() => deleteShoppingHistory()}>Clear</button>
        </div>
        <div class="row">
        <br />
        {groceryArray.map((grocery) =>(
            <div key={grocery.id} className={grocery.purchased ? "card text-white bg-success mb-3 d-flex justify-content-center col-md-4" : "card text-dark bg-light mb-3 d-flex justify-content-center col-md-4" }>
            <p >{grocery.name}</p>
            <p>{grocery.quantity} - {grocery.unit}</p>
            {grocery.purchased ? 
            <p>Purchased</p> :
            <div> 
            <button class="btn btn-success" id="buy" onClick = {() => setPurchased(grocery.id)}>Buy</button>
            <button class="btn btn-danger" id="remove" onClick= {() => deleteItem(grocery.id)}>Remove</button>
            {<button class="btn btn-warning" id="edit" onClick={() => {
                setIdOfItem(grocery.id);
                getOneItem(grocery.id);}
                }>Edit</button>}
            </div>
            }     
        </div>
        
             ))}</div>
    </>)}

export default GroceryList;