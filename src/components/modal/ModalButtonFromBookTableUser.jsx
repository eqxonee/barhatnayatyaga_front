import {Button, DatePicker, Form, Input, InputNumber, Modal, Select, Space, TimePicker} from 'antd';
import React, {useState} from 'react';
import {getValue} from "@testing-library/user-event/dist/utils";
import dayjs from "dayjs";


const ModalButtonFromBookTableUser = () => {
    const [modalIsOpen, setModalOpen] = useState(false);
    const format = 'HH:mm';
    let [date, setDate] = useState("");
    let [time, setTime] = useState("");
    let [number, setNumber] = useState("");
    let [beforeTime, setBeforeTime] = useState("");

    let modelForm = {
        date,
        time,
        number
    }

    const onSearch = (value) => {
        console.log('search:', value);
    };
    const onChange = (value) => {
        setNumber(value);
    };
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
                <Form.Item> <Select allowClear="true"
                                    showSearch
                                    placeholder="Выбор стола"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                                    }
                                    options={[
                                        {
                                            value: '1',
                                            label: '1',
                                        },
                                        {
                                            value: '2',
                                            label: '2',
                                        },
                                        {
                                            value: '3',
                                            label: '3',
                                        },
                                        {
                                            value: '4',
                                            label: '4',
                                        },
                                        {
                                            value: '5',
                                            label: '5',
                                        },
                                        {
                                            value: '6',
                                            label: '6',
                                        },

                                    ]}
                /> </Form.Item>
                <Form.Item> <DatePicker value={date} style={{width: 480}} placeholder="Выберете день"
                                        onChange={event => {
                                            setDate(event.target.value)
                                        }}/> </Form.Item>
                <Form.Item rules={[
                    {
                        required: true,
                        message: "Введите время!"
                    },
                ]}> <TimePicker defaultValue={dayjs('00:00' , format)} format={format} value={time} style={{width: 480}} placeholder="Выберете время от"
                                onChange={event => {
                                    setTime(event.target.value)
                                }}/>
                </Form.Item>
                <Form.Item rules={[
                    {
                        required: true,
                        message: "Введите время!"
                    },
                ]}> <TimePicker defaultValue={dayjs('00:00' , format)} format={format} value={beforeTime} style={{width: 480}} placeholder="Выберете время до"
                                onChange={event => {
                                    setBeforeTime(event.target.value)
                                }}/>
                </Form.Item>
                <Form.Item> <Input style={{width: 480}} placeholder="Ввести че нибудь"/> </Form.Item>
                <Form.Item> <Input style={{width: 480}} placeholder="Ввести че нибудь"/> </Form.Item>


            </Modal>
        </>
    );
};

export default ModalButtonFromBookTableUser;