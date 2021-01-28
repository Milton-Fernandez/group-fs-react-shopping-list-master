import React from 'react';
import { useState, useEffect } from 'react';
import Header from '../Header/Header.jsx'
import './App.css';
import axios from 'axios';
import GroceryList from '../GroceryList/GroceryList.jsx';
import AddItemForm from '../AddItemForm/AddItemForm';


function App() {
    let [groceryArray, setGroceryArray] = useState([]);
    //these are used in the form
    let [newItemName, setNewItemName] = useState('');
    let [newItemQuantity, setNewItemQuantity] = useState(0);
    let [newItemUnit, setNewItemUnit] = useState('');
    // On Load, do this thing
    useEffect(() => {
        console.log('in useEffect')
        fetchGroceries();
    }, []);
    
    //DELETE request
    const deleteItem = (event) => {
        axios({
            method: 'DELETE',
            url: `/list/${id}`
        }).then((response) => {
            fetchGroceries();
        })

        
    }

    //POSTS request
    const addItem = (event) => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: '/list',
            data: {
                name: newItemName,
                quantity: newItemQuantity,
                unit: newItemUnit
            }
        }).then((response) => {
            fetchGroceries();
            setNewItemName('');
            setNewItemQuantity(0);
            setNewItemUnit('');
        })
    }

    // GET request
    const fetchGroceries = () => {
        axios.get('/list').then((response) => {
            console.log('This is the Grocery List From Database', response.data);
            setGroceryArray(response.data);
        }).catch((error) => {
            console.log(error)
        })}
 
    return (
        <div className="App">
            <main>
            <Header />
            <AddItemForm 
                addItem={addItem}
                newItemName={newItemName}
                setNewItemName={setNewItemName}
                newItemQuantity={newItemQuantity}
                setNewItemQuantity={setNewItemQuantity}
                newItemUnit={newItemUnit}
                setNewItemUnit={setNewItemUnit}
            />
            <GroceryList 
            groceryArray={groceryArray}
            />

            
            </main>
        </div>
    );
}

export default App;
