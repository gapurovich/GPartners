<template>
    <div class="header">
        <div class="header__inner">
            <div class="logo">
                <h1><span>G</span>Partners</h1>
            </div>
            <ul>
                <li v-for="link in links">
                    <router-link :to="link.href">{{ link.title }}</router-link>
                </li>
            </ul>
        </div>
        <div class="header-line"></div>
        <div class="header__bottom-inner">
            <div class="menu-link" v-for="link in bottomLinks">
                <router-link :to="link.href">{{ link.title }}</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            links: [
                {
                    title: 'Главная',
                    href: '/'
                },
                {
                    title: 'Как зарабатывать',
                    href: '/earn-money'
                },
                {
                    title: 'Повышение продаж',
                    href: '/increase-sales'
                }
            ],
            bottomLinks: [
                {
                    title: 'Финансовые предложения',
                    href: '/offers/finance'
                },
                {
                    title: 'Центр обучения продавцов',
                    href: '/teach/sellers'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
