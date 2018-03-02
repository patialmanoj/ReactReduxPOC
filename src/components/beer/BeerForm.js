import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const BeerForm = ({beer,allCost,onSave,onChange,loading,errors}) =>{
    return(
        <form>
            <h1>Manager Beer</h1>
            <TextInput
            name = "title"
            label ="Title"
            value= {beer.title}
            onchange= {onChange}
            error= {errors.title} />
           
            <SelectInput
            name = "cost"
            label ="Cost"
            value= {beer.cost}
            defaultOption = "Select Beer"
            options= {allCost}
            error= {errors.title} />
           
            <TextInput
            name = "origin"
            label ="Origin"
            value= {beer.origin}
            onchange= {onChange}
            error= {errors.origin} />

            <TextInput
            name = "description"
            label ="Description"
            value= {beer.description}
            onchange= {onChange}
            error= {errors.description} />

            <input
            type ="submit"
            disabled={loading}
            value= {loading? 'Saving...':'Save'}
            className= "btn btn-primary"
            onClick={onSave}/>
        </form>

    );

};

BeerForm.propTypes = {
    course : React.PropTypes.object.isRequired ,
    allCost : React.PropTypes.array,
    onSave : React.PropTypes.func.isRequired,
    onChange : React.PropTypes.func.isRequired,
    loading : React.PropTypes.bool,
    errors: React.PropTypes.object.isRequired,
    beer : React.PropTypes.object.isRequired
};

export default BeerForm;