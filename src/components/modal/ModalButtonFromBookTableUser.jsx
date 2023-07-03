import {Button, Form, Input, InputNumber, Modal} from 'antd';
import React,{useState} from 'react';


const ModalButtonFromBookTableUser = () => {
    const [modalIsOpen, setModalOpen] = useState(false);
    let [name, setName] = useState("");
    return (
        <>
            <Button type="primary" onClick={() => setModalOpen(true)}>
                Забронировать стол
            </Button>
            <Modal
                title="Бронирование столика"
                centered
                open={modalIsOpen}
                onOk={() => setModalOpen(false)}
                onCancel={() => setModalOpen(false)}
                okText="Забронировать стол"
                cancelText="Отмена">
                <Form.Item> <Input style={{ width: 480 }} placeholder="Ввести че нибудь" /> </Form.Item>
                <Form.Item> <Input style={{ width: 480 }} placeholder="Ввести че нибудь" /> </Form.Item>
                <Form.Item> <Input style={{ width: 480 }} placeholder="Ввести че нибудь" /> </Form.Item>
                <Form.Item> <Input style={{ width: 480 }} placeholder="Ввести че нибудь" /> </Form.Item>
                <Form.Item> <InputNumber style={{ width: 480 }} placeholder="Ввести число" /> </Form.Item>


            </Modal>
        </>
    );
};

export default ModalButtonFromBookTableUser;