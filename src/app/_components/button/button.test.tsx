import { describe } from "node:test";
import {Button } from '.'

import { render , screen } from "@testing-library/react";

describe('button component' , ()=>{
    test('renders a default Button' , ()=>{
        const {getByText} = render(<Button>Click here</Button>);
        expect(getByText('Click here')).toBeInTheDocument();
    }); 

    test('disable the button when isDisabled props is true;' , ()=>{
        render(<Button isDisabled={true}>Click Here </Button>);
    expect(screen.getByRole('button')).toBeDisabled();
    });
    
})