function Main() {
    let name = "둘리";
    let age = "60";
    const 음식메뉴 = ['김밥', '순대', '만두'];
    const userInfo = {
        name: "홍길동",
        address: "구로동"
    }
    return (
        <section>
            <p>처음 작성하는 리액트 문서</p>
            <p>{name}의 나이는 {age}입니다.</p>
            <ul>
                <li>{음식메뉴[0]}</li>
                <li>{음식메뉴[1]}</li>
                <li>{음식메뉴[2]}</li>
            </ul>
            <p>{userInfo.name}님의 주소는 {userInfo.address}입니다.</p>
            <p>코드수정</p>
        </section>
    )
}

export default Main;