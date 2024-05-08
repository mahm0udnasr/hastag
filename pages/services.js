const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const titlePage = document.getElementById("title-page");
const descPage = document.getElementById("desc-page");
const allContent = document.getElementById("allContent");
const backHome = document.getElementById("backHome");
let content = "";
if (id == 1) {
    titlePage.innerHTML = "خدمات المتابعين";
    descPage.innerHTML = "خدمات المتابعين لكل المنصات التواصل الاجتماعي - تبدأ من 1000 متابع إلي 1000000 متابع.";
    contentOne();
} else if (id == 2) {
    titlePage.innerHTML = "خدمات التفاعلات";
    descPage.innerHTML = "خدمات التفاعل بكل الأنواع لايك تعليق مشاركات , باقات تبدأ من 5000 تفاعل الي عدد غير محدود من التفاعلات.";
    contentTwo();
} else if (id == 4) {
    titlePage.innerHTML = "خدمات توجيه المحتوى و إدارته";
    descPage.innerHTML = "نقدم لكم خدمات توجيه المحتوى على وسائل التواصل و تحقيق أعلى وصول من المنشورات التي يتم مشاركتها على حسابك و الوصول لأكبر عدد من المهتمين بمجال عملك.";
    contentFour();
}  else if (id == 6) {
    titlePage.innerHTML = "خدمات الأعلانات المموله";
    descPage.innerHTML = "تساعد في وصول محتواك من خلال اشخاص محترفين في الاعلانات المموله علي فيسبوك وعلي باقي منصات التواصل الاجتماعي.";
    contentSex();
    } else {
    window.location.href = "../../index.html#services";
}
// back to home page
backHome.onclick = ()=> {
    window.location.href = "../index.html#services";
}

function contentOne() {
    let one,two,three,four,five,sex;
    one = "متابعين انستجرام";
    two = "متابعين فيس بوك";
    three = "متابعين تيك توك";
    four = "مشتركين يوتيوب";
    five = "متابعين تويتر";
    sex = "أعضاء تيليجرام";
    content = 
    `
    <!-- service one -->
    <div class="box-content">
        <div class="b-title">
            متابعين انستجرام
        </div>
        <div class="b-desc">
            وقت البداية : 24 ساعة
            <br>
            نقص : 2-7 %
            <br>
            ضمان مدى الحياة
        </div>
        <a href="https://wa.me/+201005055305/?text=${one}"  target="_blank" class="b-btn">اطلب الأن</a>
    </div>
    <!--// service one //-->

    <!-- service two -->
    <div class="box-content">
        <div class="b-title">
            متابعين فيس بوك
        </div>
        <div class="b-desc">
            وقت البداية : 24 ساعة
            <br>
            نقص : 2-7 %
            <br>
            ضمان مدى الحياة
        </div>
        <a href="https://wa.me/+201005055305/?text=${two}"  target="_blank" class="b-btn">اطلب الأن</a>
    </div>
    <!--// service two //-->

    <!-- service three -->
    <div class="box-content">
        <div class="b-title">
            متابعين تيك توك 
        </div>
        <div class="b-desc">
            وقت البداية : 24 ساعة
            <br>
            نقص : 2-7 %
            <br>
            ضمان 30 يوم
        </div>
        <a href="https://wa.me/+201005055305/?text=${three}" target="_blank"  class="b-btn">اطلب الأن</a>
    </div>
    <!--// service three //-->

    <!-- service four -->
    <div class="box-content">
        <div class="b-title">
            مشتركين يوتيوب
        </div>
        <div class="b-desc">
            وقت البداية : 24 ساعة
            <br>
            نقص : 2-7 %
            <br>
            ضمان 365 يوم
        </div>
        <div class="b-btn">
            <a href="https://wa.me/+201005055305/?text=${four}"  target="_blank" >اطلب الأن</a>
        </div>
    </div>
    <!--// service four //-->

    <!-- service five -->
    <div class="box-content">
        <div class="b-title">
            متابعين تويتر 
        </div>
        <div class="b-desc">
            وقت البداية : 24 ساعة
            <br>
            نقص : 2-7 %
            <br>
            ضمان 60 يوم
        </div>
        <div class="b-btn">
            <a href="https://wa.me/+201005055305/?text=${five}"  target="_blank" >اطلب الأن</a>
        </div>
    </div>
    <!--// service five //-->

    <!-- service six -->
    <div class="box-content">
        <div class="b-title">
            أعضاء تيليجرام
        </div>
        <div class="b-desc">
            وقت البداية : 24 ساعة
            <br>
            نقص : 2-7 %
            <br>
            ضمان 365 يوم
        </div>
        <div class="b-btn">
            <a href="https://wa.me/+201005055305/?text=${sex}" target="_blank"  >اطلب الأن</a>
        </div>
    </div>
    <!--// service six //-->
    `;
    allContent.innerHTML = content;
}

function contentTwo() {
    let one,two,three;
    one = "تفاعل فيس بوك";
    two = "تفاعل انستحرام";
    three = "تفاعل تيك توك";
    content = 
    `
    <!-- service one -->
    <div class="box-content">
        <div class="b-title">
            فيس بوك
        </div>
        <div class="b-desc">
            لايك - تعليق
            <br>
            وقت البداية : 1ساعة
            <br>
            نقص : 2 - 5%
            <br>
            ضمان مدي الحياة
        </div>
        <a href="https://wa.me/+201005055305/?text=${one}"  target="_blank" class="b-btn">اطلب الأن</a>
    </div>
    <!--// service one //-->
    <!-- service two -->
    <div class="box-content">
        <div class="b-title">
            انستحرام
        </div>
        <div class="b-desc">
            لايك - تعليق - خفظ
            <br>
            وقت البداية : 1ساعة
            <br>
            نقص : 2 - 5%
            <br>
            ضمان مدي الحياة
        </div>
        <a href="https://wa.me/+201005055305/?text=${two}"  target="_blank" class="b-btn">اطلب الأن</a>
    </div>
    <!--// service two //-->
    <!-- service three -->
    <div class="box-content">
        <div class="b-title">
            تيك توك
        </div>
        <div class="b-desc">
            لايك - تعليق
            <br>
            وقت البداية : 5ساعات
            <br>
            نقص : 2 - 5%
            <br>
            ضمان مدي الحياة
        </div>
        <a href="https://wa.me/+201005055305/?text=${three}"  target="_blank" class="b-btn">اطلب الأن</a>
    </div>
    <!--// service three //-->
    `
    allContent.innerHTML = content;
}

function contentFour() {
    let one,two,three,four;
    one = "فضية";
    two = "ذهبية";
    three = "ماسية";
    four = "VIP";
    content = 
    `
    <!-- service one -->
    <div class="box-content">
        <div class="b-title">
        باقة فضية
        </div>
        <div class="b-desc">
        هي باقة عادة للمبتدئين في مجال التسويق الرقمي 
            <br>
            مدة الباقة : 30 يوم
        </div>
        <a href="https://wa.me/+201005055305/?text=${one}"  target="_blank" class="b-btn">اطلب الأن</a>
    </div>
    <!--// service one //-->

    <!-- service two -->
    <div class="box-content">
        <div class="b-title">
        باقة ذهبية
        </div>
        <div class="b-desc">
        هي باقة تساعدك على تحقيق أهدافك و الوصول لأكبر عدد من العملاء المهتمين بمجال عملك
            <br>
            مدة الباقة : 60 يوم
        </div>
        <a href="https://wa.me/+201005055305/?text=${two}"  target="_blank" class="b-btn">اطلب الأن</a>
    </div>
    <!--// service two //-->

    <!-- service three -->
    <div class="box-content">
        <div class="b-title">
        باقة ماسية
        </div>
        <div class="b-desc">
        هي باقة يستخدمها المؤسسات و كبرى الشركات لكي يصلوا لعدد مهول من العملاء و هي تعمل على ترويج منشوراتك عبر تريندات المنصات بدون إعلانات ممولة 
            <br>
            مدة الباقة : 90 يوم 
        </div>
        <a href="https://wa.me/+201005055305/?text=${three}"  target="_blank" class="b-btn">اطلب الأن</a>
    </div>
    <!--// service three //-->

    <!-- service four -->
    <div class="box-content">
        <div class="b-title">
        باقات VIP
        </div>
        <div class="b-desc">
        هي باقات تعمل على ترويج عمل الشركة و المؤسسة لتكون أعلى وصولا في مجال عملها على منصات التواصل 
            <br>
            مدة الباقة : 180 يوم 
            <span class="blod-desc">غير متوفرة دائما</span>
        </div>
        <a href="https://wa.me/+201005055305/?text=${four}"  target="_blank" class="b-btn">اطلب الأن</a>
    </div>
    <!--// service four //-->
    `
    allContent.innerHTML = content;
}

function contentSex() {
    let one,two,three;
    one = "الهوية البصرية";
    two = "التسويق و الإعلان";
    three = "موشن جرافيك";
    content = 
    `
    <!-- service one -->
    <div class="box-content">
        <div class="b-title">
        الهوية البصرية 
        </div>
        <div class="b-desc">
            كن مميزا بهوية بصرية إحترافية لعلامتك التجارية      
            <br>
            عزز تواجدك في أذهان عملائك
        </div>
        <a href="https://wa.me/+201005055305/?text=${one}"  target="_blank" class="b-btn">اطلب الأن</a>
    </div>
    <!--// service one //-->
    <!-- service two -->
    <div class="box-content">
        <div class="b-title">
        التسويق و الإعلان 
        </div>
        <div class="b-desc">
        أجعل حملتك الإعلانية أكثر تميزا و إحترافية مع تصميم احترافي يجذب عميلك
        </div>
        <a href="https://wa.me/+201005055305/?text=${two}"  target="_blank" class="b-btn">اطلب الأن</a>
    </div>
    <!--// service two //-->
    <!-- service three -->
    <div class="box-content">
        <div class="b-title">
        موشن جرافيك 
        </div>
        <div class="b-desc">
        إصنع فيديو إعلاني احترافي خاص بك ليكون مساعدا لك في نشضر خدمتك أو سلعتك التي تقدمها
        </div>
        <a href="https://wa.me/+201005055305/?text=${three}"  target="_blank" class="b-btn">اطلب الأن</a>
    </div>
    <!--// service three //-->
    `
    allContent.innerHTML = content;
}
