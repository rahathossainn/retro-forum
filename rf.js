const loadPost = async () => {
    const res = await fetch ('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const allPost = data.posts;
    // console.log(allPost)
    displayPost(allPost)
}
const displayPost = (allpost) => {
    const postContainer = document.getElementById('post-container')
    allpost.forEach(post => {
        const postCard = document.createElement('div');
        postCard.classList = 'bg-[#797dfc27] hover:border border-[#797DFC] flex gap-5 w-[700px] mb-10 r p-10 rounded-3xl'
        postCard.innerHTML = `
        <div>
                            <div class="bg-white relative rounded-2xl w-16 h-16">
                            <img class="rounded-2xl" src="${post.image}" alt="">
                            </div>
                            <!-- green dot -->
                            <div
                                class="absolute w-4 h-4 bg-green-500 rounded-full left-[175px] top-[59rem] border border-white">
                            </div>
                        </div>
                        <!-- user section end -->
                        <div class="">
                            <div class="flex gap-5 font-semibold">
                                <div>
                                    <p>#${post.category}</p>
                                </div>
                                <div>Athor:${post.author.name}</div>
                            </div>
                            <div class="mt-1 mb-4">
                                <h2 class="text-2xl font-bold mb-2">${post.title}</h2>
                                <p>${post.description}</p>
                            </div>
                            <hr class="mb-4 border-t-1 border-[#12132d33]">
                            <div class="">
                                <!-- message -->
                                <div class="flex gap-64 justify-around">
                                    <!-- all together -->
                                    <div class="flex gap-6">
                                        <div class="flex gap-2">
                                            <svg class="w-6 h-6 text-gray-800 dark:[#12132D]" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                                viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2"
                                                    d="M16 10.5h.01m-4.01 0h.01M8 10.5h.01M5 5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-6.6a1 1 0 0 0-.69.275l-2.866 2.723A.5.5 0 0 1 8 18.635V17a1 1 0 0 0-1-1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
                                            </svg>
                                            <p>${post.comment_count}</p>
                                        </div>
                                        <!-- eye -->
                                        <div class="flex gap-2">
                                            <svg class="w-6 h-6 text-gray-800 dark:[#12132D]" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                                viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-width="2"
                                                    d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                                                <path stroke="currentColor" stroke-width="2"
                                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            </svg>
                                            <p>${post.view_count}</p>
                                        </div>
                                        <!-- clock -->
                                        <div class="flex gap-2">
                                            <svg class="w-6 h-6 text-gray-800 dark:[#12132D]" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                                                viewBox="0 0 24 24">
                                                <path stroke="currentColor" stroke-linecap="round"
                                                    stroke-linejoin="round" stroke-width="2"
                                                    d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>
                                            <p class="w-16">${post.posted_time} min</p>
                                        </div>
                                    </div>
                                    <div class="bg-green-500 rounded-full p-1">
                                        <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            fill="currentColor" viewBox="0 0 24 24">
                                            <path fill-rule="evenodd"
                                                d="M3 5.983C3 4.888 3.895 4 5 4h14c1.105 0 2 .888 2 1.983v8.923a1.992 1.992 0 0 1-2 1.983h-6.6l-2.867 2.7c-.955.899-2.533.228-2.533-1.08v-1.62H5c-1.105 0-2-.888-2-1.983V5.983Zm5.706 3.809a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Zm2.585.002a1 1 0 1 1 .003 1.414 1 1 0 0 1-.003-1.414Zm5.415-.002a1 1 0 1 0-1.412 1.417 1 1 0 1 0 1.412-1.417Z"
                                                clip-rule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
        `
        postContainer.appendChild(postCard)
        
    })

}

const handleSearch = () => {
    
}
loadPost()