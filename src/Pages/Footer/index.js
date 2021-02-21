import { Button, FormControl, TextField } from '@material-ui/core'
import React from 'react'
import { ContactUs } from './FooterElements'

function Footer() {
    return (
        <>
            <ContactUs>
                <p>35,000+ ALREADY JOINED</p>
                <h2>Saty up-to-date with what we're doing</h2>
                <form>
                    <FormControl>
                        <TextField defaultValue="email@example.com" variant="outlined">
                            
                        </TextField>
                    </FormControl>
                    <Button variant="contained" >Contact Us</Button>
                </form>
            </ContactUs>

        </>
    )
}

export default Footer
