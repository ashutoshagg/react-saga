import React from 'react';
import { Modal, Button } from 'semantic-ui-react';
import EntryForm from './EntryForm';

function ModalEdit({ isOpen, setIsOpen }) {
    return (
        <Modal
            open={isOpen}
        >
            <Modal.Header>
                Edit Entry
            </Modal.Header>
            <Modal.Content>
                {/* <Modal.Description>
                    Something here
                </Modal.Description> */}
                <EntryForm />
            </Modal.Content>

            <Modal.Actions>
                <Button onClick={() => setIsOpen(false)}>
                    Close
                </Button>
            </Modal.Actions>
        </Modal>
    )
}

export default ModalEdit;