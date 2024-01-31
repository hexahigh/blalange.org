<script>
	import cicignonPreview from '$lib/img/article-previews/cicignon.jpg';
    import { UserCircleOutline, CalendarMonthOutline } from 'flowbite-svelte-icons';
</script>

<div class="p-6 max-w-6xl mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
    <div>
        <img src={cicignonPreview} class="w-full aspect-[16/9] object-cover rounded-lg" alt="Article Image">
        <div class="text-xl font-medium text-black">Example Article</div>
        <p class="text-gray-500"> <UserCircleOutline/> By John Doe</p>
        <p class="text-gray-500"> <CalendarMonthOutline/> January 1, 2022</p>
        <p class="mt-2 text-gray-800">This is an example article. It's a great place to put your content.</p>
    </div>
</div>