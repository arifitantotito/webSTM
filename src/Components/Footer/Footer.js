import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
<footer>
    <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-3">
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Developers</h2>
            <ul class="text-gray-500 dark:text-gray-400">
                <li class="mb-4">
                    <p class=" hover:underline">Arifitanto Oktarian Hafayer, S.T.</p>
                </li>
                <li class="mb-4">
                    <p class="hover:underline">Averrous Cendikia Islami, S.T.</p>
                </li>
                <li class="mb-4">
                    <p class="hover:underline">Adib Wicaksono, S.T.</p>
                </li>
                
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Contacts</h2>
            <ul class="text-gray-500 dark:text-gray-400">
                <li class="mb-4">
                    <a href="https://www.instagram.com/arifitanto_tito/" class="hover:underline">@arifitanto_tito</a>
                </li>
                <li class="mb-4">
                    <a href="https://www.instagram.com/averrousc/" class="hover:underline">@averrousc</a>
                </li>
                <li class="mb-4">
                    <a href="https://www.instagram.com/_adibwcksn/" class="hover:underline">@_adibwcksn</a>
                </li>
            </ul>
        </div>
        <div>
            <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-gray-400">Address</h2>
            <ul class="text-gray-500 dark:text-gray-400">
                <li class="mb-4">
                    <a href="https://maps.app.goo.gl/yPj2XwHza9LGBATU7" class="hover:underline">Bandung, Sukabirus, Jl. Haji Umar, Belakang Lapangan Tennis Universitas Telkom.</a>
                </li>
                <li class="mb-4">
                    <p class="hover:underline">+62852-8333-3747</p>
                </li>
            </ul>
        </div>
        
    </div>
    <div class="py-6 px-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 dark:text-gray-300 sm:text-center">© 2022 <a href="https://flowbite.com/">STM™</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center md:mt-0">
            <a href="https://github.com/arifitantotito" class="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">GitHub account</span>
            </a>
        </div>
    </div>
</footer>
    );
}



export default Footer;
