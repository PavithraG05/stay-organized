import { Component, useState } from 'react'

const emptyForm = {
    FullName:"",
    Username:"",
    Password:"",
    ConfirmPassword:"",
}
export default function Test() {
    const [form, setForm] = useState(emptyForm);
    // const [checkedItems, setCheckedItems] = useState(emptyForm.itemsChecked);
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(form);
        // log values from controlled inputs
    }

    function handleChange(e){
        // console.log(e);
        const name = e.target.name;
        const value = e.target.value
        setForm((form) => ({
              ...form,
              [name]: value,
          })
        );
    }

    // function handleCheckChange(e){
    //     const value = e.target.value;
    //     const name = e.target.name;
    //     let copyList = [];
    //     // console.log(value, name);
    //     if (e.target.checked) {
    //         copyList = [...checkedItems, value]
    //         setCheckedItems(copyList);
    //         // console.log(copyList);
            
    //     } else {
    //         copyList = checkedItems.filter((item) => item !== value);
    //         setCheckedItems(copyList);
    //         // console.log(copyList);
            
    //     }
    //     // console.log(copyList);
    //     setForm((form) => ({
    //         ...form,
    //         [name]: copyList,
    //     })
    //   );
    // }

    return (
        <div>
            
            <h2>[Day2 - Form Ex]</h2>
            <form onSubmit={handleSubmit}>
                
                <div className="form-group p-2">
                    <label className="form-label">Full Name*</label>
                    <input type="text" className="form-control" value={form.firstName} name='firstName' onChange={handleChange}/>
                </div>

                {/* <input onChange={handleChange} name='lastName' placeholder='Last Name' value={form.lastName}/>

                <input onChange={handleChange} name='email' placeholder='Email' type="email" value={form.email}/>

                <input onChange={handleChange} name='dob' placeholder='Date of Birth' type="date" value={form.dob}/>

                <br />

                <label>
                    <input type='radio' name="gender" onChange={handleChange} id='male' value='male' checked={form.gender==='male'}></input>
                    Male
                </label>

                <label>
                    <input type='radio' name="gender" onChange={handleChange} id='female' value='female' checked={form.gender==='female'}></input>
                    Female
                </label>

                <br />

                <select name='country' onChange={handleChange} value={form.country} id="country">
                    <option value=''>Select Country</option>
                    <option value='US'>United States</option>
                    <option value='CA'>Canada</option>
                    <option value='MO'>Mexico</option>
                </select>

                <br />

                <label>
                    <input type='checkbox' value="likes Pineapple" name="itemsChecked" onChange={handleCheckChange}/>
                    Likes Pineapple
                </label>

                <label>
                    <input type='checkbox' value="likes Liquorice" name="itemsChecked" onChange={handleCheckChange} />
                    Likes Liquorice
                </label>

                <br />
                
                <button>Submit</button> */}
            </form>
            <div>
                {Object.keys(form).map((key) => 
                <div key={key}>
                    <h4>{key}:&nbsp;{form[key]}</h4>
                </div>)}
            </div>
        </div>
    )
}

