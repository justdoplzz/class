const index = () => {
    return(
        <div style={{ display: 'flex', flexDirection: 'column'}}>
            <div style={{ display: 'flex' , gap: '10px'}}>
                <div style={{background: 'yellow', width: '100px'}}>
                    a
                </div>
                <div style={{background: 'red', width: '100px'}}>
                    b
                </div>
                <div style={{background: 'blue', width: '100px'}}>
                    c
                </div>
            </div>
            <div style={{background: 'green', width: '300px'}}>
                d
            </div>
        </div>
    );
}

export default index;