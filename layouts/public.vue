<template>
    <div>
        <header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <slot />
        </main>
        <footer>
            <p>&copy; 2021 My Site</p>
        </footer>
    </div>
</template>