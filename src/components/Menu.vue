<template>
    <div class="menu">
        <div class="menu-content">
            <img src="./../assets/menu-logo.svg" alt="menu-logo" class="menu-logo">
            <div class="menu-lists">
                <ul>
                    <li>
                        <a href="#">
                            <img src="./../assets/applications.svg" alt="" class="menu-item">
                            <span>Новые заявки</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./../assets/distribution.svg" alt="" class="menu-item">
                            <span>Распределение</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./../assets/appointed.svg" alt="" class="menu-item">
                            <span>Назначенные</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./../assets/storage.svg" alt="" class="menu-item">
                            <span>На хранении</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./../assets/history.svg" alt="" class="menu-item">
                            <span>История</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./../assets/products.svg" alt="" class="menu-item">
                            <span>Товары КБТ</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./../assets/bonus.svg" alt="" class="menu-item">
                            <span>Бонусы</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./../assets/groups.svg" alt="" class="menu-item">
                            <span>Группы</span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src="./../assets/directory.svg" alt="" class="menu-item">
                            <span>Справочник</span>
                        </a>
                    </li>
                </ul>

                <div class="logout">
                    <div class="wrapper">
                    <div class="logout-icon">DB</div>
                    <div class="name">Dinara Bolat</div>
                    </div>
                    <a class="logout-link" href="login"><img src="./../assets/logout.svg" alt="logout" class="log-out-icon" /></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu',
}
</script>

<style scoped>
.menu-logo {
    margin-top: 50px;
}
.menu-content {
    position: fixed;
    background: #001529;
    width: 310px;
    height: 100vh;
}
span{
    font-weight: 500;
    font-size: 17px;
    line-height: 21px;
    color: #FFFFFF;
    text-align: center;
    margin-left: 15px;
}
ul {
    padding-top: 30px;
    list-style: none;
}
a {
    display: flex;
    align-items: center;
    height: 60px;
    cursor: pointer;
    padding-left: 50px;
    text-decoration: none;
}

li:hover {
    background-color: #029AAD;
}

.menu-item {
    margin: 0;
    width: 30px;
    height: 30px;
}
.logout {
    position: absolute;
    bottom: 30px;
    width: 90%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-left: 5%;
    background: #FFFFFF1A;
    border-radius: 10px;
    padding: 12px;
}
.logout-icon {
    width: 38px;
    height: 37px;
    background: #029AAD;
    border-radius: 5px;
    font-weight: 500;
    font-size: 17px;
    line-height: 21px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
}
.wrapper{
    display: flex;
    align-items: center;
    flex-direction: row;
    gap: 8px;
}
.name {
    font-weight: 500;
    font-size: 17px;
    line-height: 21px;
    color: #FFFFFF;
}
.logout-link {
    padding: 0;
    height: 0;
}
</style>