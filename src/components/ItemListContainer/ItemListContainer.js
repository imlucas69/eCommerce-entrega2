const ItemListContainer = ({greeting}) => {
    return (
        <div className="App">
            <NavBar />
            <ItemListContainer greeting={'Bienvenidos'} />
        </div>
    );
}

export default App;