import { Table } from 'antd';
const columns = [
    {
        title: 'Номер стола',
        dataIndex: 'numberTable',
        key: '1',
    },
    {
        title: 'Свободен с ',
        dataIndex: 'time',
        key: '2',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Action',
        dataIndex: '',
        key: 'x',
        render: () => <a>Забронировать стол</a>, /*можно попробовать модальное окно*/
    },
];
const data = [
    {
        key: 1,
        numberTable: '1',
        time: 32,
        address: 'New York No. 1 Lake Park',
        description: 'Что тут есть дополнительно типо ПС + телик или чет еще',
    },
    {
        key: 2,
        numberTable: '2',
        time: 42,
        address: 'London No. 1 Lake Park',
        description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
    },
    {
        key: 3,
        numberTable: 'Not Expandable',
        time: 29,
        address: 'Jiangsu No. 1 Lake Park',
        description: 'This not expandable',
    },
    {
        key: 4,
        numberTable: 'Joe Black',
        time: 32,
        address: 'Sydney No. 1 Lake Park',
        description: 'My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.',
    },
];
const BookTableUser = () => (
    <Table
        columns={columns}
        expandable={{
            expandedRowRender: (record) => (
                <p
                    style={{
                        margin: 0,
                    }}
                >
                    {record.description}
                </p>
            ),
            rowExpandable: (record) => record.name !== 'Not Expandable',
        }}
        dataSource={data}
    />
);


export default BookTableUser;