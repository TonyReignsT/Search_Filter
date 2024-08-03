import React , {useState} from 'react';
import data from './ProductData.json';
import Footer from './Footer'
import Header from './Header'

export default function App(){
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {setSearchTerm(event.target.value)}
    return(
        <>
            <Header />
            <div className='container'>
                <div className='searchInput'>
                    <input 
                    className='searchInput' 
                    type='text' 
                    placeholder='Search here...' 
                    onChange={handleChange}
                    />
                </div>
                <div className='card_Container'>
                    {
                        data.filter((val)=>{
                            if (searchTerm === ""){
                                return val;
                            } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return val;
                            }
                        }).map((val)=>{
                            return(
                                <div className='card' key={val.id}>
                                    <img src={val.image} alt='' />
                                    <p>{val.title}</p>
                                    <p className='price'>${val.price}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <Footer />
        </>
    )
}