import './AddItemForm.css';
function addItemForm(props) {
    if (props.editMode === false) {
        return (
            <form onSubmit={props.addItem}>
                <div class="form-text" class="mb-3">
                <div class="input-group mb-3">
                <span class="input-group-text"htmlFor="itemNameInput">Item:</span>
                <input class="form-control" id="itemNameInput" value={props.newItemName} onChange={(event) => { props.setNewItemName(event.target.value) }}
                    required></input></div>
                <div class="input-group mb-3">
                <span class="input-group-text">Quantity</span>
                <input class="form-control" id="quantityInput" value={props.newItemQuantity} onChange={(event) => { props.setNewItemQuantity(event.target.value) }} required></input>
                <span class="input-group-text">Unit</span>
                <input class="form-control" id="unitInput" value={props.newItemUnit} onChange={(event) => { props.setNewItemUnit(event.target.value) }} required></input>
                </div>
                <button class="btn btn-primary" type="submit">Save</button>
                </div>
            </form>
        );
    }
    else if (props.editMode === true) {
        return (
        <form onSubmit={props.updateItem}>
            <div class="form-text" class="mb-3">
            <div class="input-group mb-3">
            <span class="input-group-text">Item:</span>
            <input class="form-control" id="itemNameInput" value={props.newItemName} onChange={(event) => { props.setNewItemName(event.target.value) }}
                required></input></div>
            <div class="input-group mb-3">
            <span class="input-group-text">Quantity</span>
            <input class="form-control" id="quantityInput" value={props.newItemQuantity} onChange={(event) => { props.setNewItemQuantity(event.target.value) }} required></input>
            <span class="input-group-text">Unit</span>
            <input class="form-control"  id="unitInput" value={props.newItemUnit} onChange={(event) => { props.setNewItemUnit(event.target.value) }} required></input></div>
            <button class="btn btn-primary" type="submit">Save</button></div>
        </form>
        )
    }

}

export default addItemForm;

//TODO addItem pass in as props
/*<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Username" aria-label="Username">
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Server" aria-label="Server">
</div>*/