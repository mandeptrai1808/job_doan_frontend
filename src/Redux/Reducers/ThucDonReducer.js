const stateDefault = {
    baThangDauData: [
        {
            title: 'Canh Chua Thịt bầm',
            content: <p>
                1. Thịt heo xây: 150-200gr<br/>
                2. Rau củ: 1/2 quả dứa, 3-4 quả cà chua, 100gr giá đỗ, 2-3 củ hành tím, 1-2 nhánh hành lá<br/>
                3. Gia vị: Mắm, muối, hạt nêm <br/>
            </p>,
            img:  `url(${
                process.env.PUBLIC_URL + "/canhchuathitbam.webp"
              })`
        },
        {
            title: 'Thịt gà kho rừng',
            content: <p>
                1. Gà: 0,5 kg <br/>
                2. Gừng: 1 củ <br/>
                3. 2 trái ớt, vài tép tỏi <br/>
                4. Gia vị: Đường, muối, hạt nêm, nước mắm, bột ngọt, ngò rí…
            </p>,
            img:  `url(${
                process.env.PUBLIC_URL + "/khorung.jpg"
              })`
        },
        
    ],
    typeId: 0
}

export const ThucDonReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case "DELETE_ITEM":
            
            return {...state}
        case "CAHNGE_TYPE_ID":
            state.typeId = action.content;
            return {...state}
        default:
            return {...state}
    }
}