// 弹窗控制
function showModal() {
    const modal = document.getElementById('noticeModal');
    modal.classList.add('show');
}

function closeModal() {
    const modal = document.getElementById('noticeModal');
    modal.classList.remove('show');
}

// 页面加载完成后显示弹窗
document.addEventListener('DOMContentLoaded', () => {
    showModal();
});

// 点击弹窗外部区域关闭弹窗
document.getElementById('noticeModal').addEventListener('click', (e) => {
    if (e.target.id === 'noticeModal') {
        closeModal();
    }
});

// 处理搜索功能
function handleSearch(event) {
    event.preventDefault();
    const searchInput = document.querySelector('.search-input');
    const searchTerm = searchInput.value.trim();
    
    if (searchTerm) {
        // 这里可以实现搜索逻辑
        // 例如：跳转到搜索结果页面
        alert(`搜索关键词: ${searchTerm}`);
        // 或者可以添加 AJAX 请求来获取搜索结果
    }
}

// 初始化 Swiper 轮播图
const swiper = new Swiper('.swiper', {
    // 循环模式
    loop: true,
    
    // 自动播放
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    
    // 分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    // 导航按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // 渐变效果
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    
    // 响应式设计
    breakpoints: {
        768: {
            slidesPerView: 1,
        }
    }
});

// 初始化新闻轮播图
const newsSwiper = new Swiper('.news-swiper', {
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    }
});

// 初始化作品展示轮播
const gallerySwiper = new Swiper('.gallery-swiper', {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    speed: 1000,
    pagination: {
        el: '.gallery-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
    }
}); 