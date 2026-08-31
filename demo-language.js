(() => {
    const thaiText = {
        "Back to website": "กลับสู่เว็บไซต์",
        "Home": "หน้าแรก",
        "Interactive test": "การทดลองแบบโต้ตอบ",
        "See a solar system working through the day.": "ดูการทำงานของระบบโซลาร์เซลล์ตลอดทั้งวัน",
        "This is an illustrative energy-flow demo for a Hua Hin home. It is not an installation quote or a guaranteed performance forecast.": "นี่คือตัวอย่างการไหลของพลังงานสำหรับบ้านในหัวหิน เพื่อประกอบความเข้าใจเท่านั้น ไม่ใช่ใบเสนอราคาติดตั้งหรือการรับประกันประสิทธิภาพ",
        "Home load details": "รายละเอียดการใช้ไฟในบ้าน",
        "Build your daily electricity use": "กำหนดการใช้ไฟฟ้ารายวันของคุณ",
        "Household base load": "การใช้ไฟพื้นฐานของบ้าน",
        "Typical SBS customer homes use around 28–36 kWh/day as base consumption when a pool pump is included. AC is added separately.": "บ้านลูกค้า SBS โดยทั่วไปใช้ไฟพื้นฐานประมาณ 28–36 kWh/วัน เมื่อรวมปั๊มสระว่ายน้ำแล้ว โดยแอร์จะคำนวณแยกต่างหาก",
        "Bedroom AC daytime": "แอร์ห้องนอนช่วงกลางวัน",
        "Runs from 10:00–16:00, when solar production is strongest.": "ทำงานช่วง 10:00–16:00 ซึ่งเป็นช่วงที่โซลาร์เซลล์ผลิตไฟได้ดีที่สุด",
        "Bedroom AC nighttime": "แอร์ห้องนอนช่วงกลางคืน",
        "Runs from 22:00–06:00, increasing battery or Grid demand.": "ทำงานช่วง 22:00–06:00 ซึ่งเพิ่มความต้องการจากแบตเตอรี่หรือระบบไฟฟ้า",
        "Standard bedroom AC estimate: 0.9 kWh per running hour. This is an illustrative starting point and can be refined for the installed AC models.": "ค่าประมาณสำหรับแอร์ห้องนอนมาตรฐาน: 0.9 kWh ต่อชั่วโมงการใช้งาน นี่เป็นจุดเริ่มต้นเพื่อประกอบการพิจารณา และสามารถปรับให้ตรงกับรุ่นแอร์ที่ติดตั้งได้",
        "Estimated total Home Load:": "ค่าประมาณการใช้ไฟรวมของบ้าน:",
        "Seasonal solar average": "ค่าเฉลี่ยพลังงานแสงอาทิตย์ตามฤดูกาล",
        "Sunny season": "ฤดูแดดจัด",
        "November–April": "พฤศจิกายน–เมษายน",
        "Mixed skies": "ท้องฟ้าแปรปรวน",
        "May–August": "พฤษภาคม–สิงหาคม",
        "Rainy season": "ฤดูฝน",
        "September–October": "กันยายน–ตุลาคม",
        "Choose a season to see how typical Hua Hin conditions affect expected solar production. This is a planning guide, not a weather forecast.": "เลือกฤดูกาลเพื่อดูว่าสภาพอากาศโดยทั่วไปในหัวหินส่งผลต่อการผลิตไฟฟ้าจากโซลาร์อย่างไร นี่เป็นแนวทางสำหรับการวางแผน ไม่ใช่พยากรณ์อากาศ",
        "Build your system": "ออกแบบระบบของคุณ",
        "Choose panels and battery": "เลือกจำนวนแผงและแบตเตอรี่",
        "640 W solar panels": "แผงโซลาร์เซลล์ 640 W",
        "Battery storage": "แบตเตอรี่สำรอง",
        "No battery": "ไม่มีแบตเตอรี่",
        "Live energy flow": "การไหลของพลังงานแบบเรียลไทม์",
        "Solar": "โซลาร์",
        "Grid": "ระบบไฟฟ้า",
        "On grid": "เชื่อมต่อระบบไฟฟ้า",
        "SBS Solar system": "ระบบ SBS Solar",
        "Standby": "รอทำงาน",
        "Battery": "แบตเตอรี่",
        "Idle": "ไม่ได้ใช้งาน",
        "Home load": "การใช้ไฟในบ้าน",
        "Time of day": "เวลาของวัน",
        "Your daily result": "ผลลัพธ์รายวันของคุณ",
        "Solar potential": "ศักยภาพพลังงานจากโซลาร์",
        "Home consumed": "การใช้ไฟของบ้าน",
        "Grid imported": "ไฟฟ้าที่ใช้จากระบบไฟฟ้า",
        "Home covered by your SBS Solar system": "บ้านที่ได้รับพลังงานจากระบบ SBS Solar",
        "Electricity bought from Grid": "ไฟฟ้าที่ซื้อจากระบบไฟฟ้า",
        "Solar potential used on site": "ศักยภาพโซลาร์ที่ใช้ในสถานที่",
        "Personal proposal": "ข้อเสนอเฉพาะสำหรับคุณ",
        "Would you like us to review your system?": "ต้องการให้เราตรวจสอบระบบของคุณไหม?",
        "Send us the setup you have built and we will contact you to discuss your property, energy needs and a tailored solar solution.": "ส่งการตั้งค่าระบบที่คุณเลือกให้เรา แล้วเราจะติดต่อกลับเพื่อพูดคุยเกี่ยวกับบ้าน ความต้องการใช้พลังงาน และโซลูชันโซลาร์เซลล์ที่เหมาะกับคุณ",
        "Your selected system will appear here.": "ระบบที่คุณเลือกจะแสดงที่นี่",
        "Your name": "ชื่อของคุณ",
        "Email address": "อีเมล",
        "Phone number": "หมายเลขโทรศัพท์",
        "Property area": "พื้นที่ของบ้าน",
        "Anything we should know?": "มีข้อมูลเพิ่มเติมที่อยากให้เราทราบไหม?",
        "Send my system for review": "ส่งระบบของฉันเพื่อให้ตรวจสอบ",
        "Your system setup and contact details are sent to SBS Solar so we can respond to your enquiry.": "การตั้งค่าระบบและข้อมูลติดต่อของคุณจะถูกส่งให้ SBS Solar เพื่อให้เราตอบกลับคำสอบถามได้",
        "Illustrative demo based on historical data only. It is not an installation quote or a guarantee of future performance or savings.": "เป็นเพียงตัวอย่างเพื่อประกอบความเข้าใจ โดยอ้างอิงจากข้อมูลในอดีตเท่านั้น ไม่ใช่ใบเสนอราคาติดตั้ง หรือการรับประกันประสิทธิภาพหรือการประหยัดในอนาคต"
    };

    const thaiAttributes = {
        "Choose a seasonal solar average": "เลือกค่าเฉลี่ยพลังงานแสงอาทิตย์ตามฤดูกาล",
        "Build your system": "ออกแบบระบบของคุณ",
        "Choose battery storage": "เลือกขนาดแบตเตอรี่",
        "Play daily simulation": "เล่นการจำลองรายวัน",
        "For example, Hua Hin": "ตัวอย่างเช่น หัวหิน",
        "Tell us about your roof, electricity bill or goals for solar.": "บอกเราเกี่ยวกับหลังคา ค่าไฟ หรือเป้าหมายในการใช้โซลาร์เซลล์ของคุณ"
    };

    const dynamicThai = {
        panel: (count) => `${count} แผง`,
        ac: (count) => count === 0 ? "ไม่มีแอร์" : `${count} เครื่อง`,
        noBattery: "ไม่มีแบตเตอรี่",
        battery: (size) => `${size} kWh แบตเตอรี่`,
        systemSummary: (panels, battery) => `${panels} × 640 W แผง · ${battery}`,
        season: (season) => ({ sunny: "ฤดูแดดจัด", mixed: "ท้องฟ้าแปรปรวน", rainy: "ฤดูฝน" }[season] || season),
        sunHours: (hours) => `${hours.toFixed(1)} ชั่วโมงแสงแดด/วัน`,
        enquirySummary: (panels, battery, season, solar, load) => `${panels} × 640 W แผง · ${battery} · ${season} · ศักยภาพพลังงานจากโซลาร์โดยประมาณ ${solar} · การใช้ไฟในบ้านโดยประมาณ ${load}`,
        gridBuying: "กำลังซื้อไฟฟ้า",
        gridNone: "ไม่ซื้อไฟฟ้า",
        batteryNotInstalled: "ยังไม่ได้ติดตั้ง",
        batteryChargeComplete: "ชาร์จเต็มแล้ว",
        batteryFull: "เต็มแล้ว",
        batteryIdle: "ไม่ได้ใช้งาน",
        batteryCharging: (power) => `กำลังชาร์จ +${power.toFixed(1)} kW`,
        batteryDischarging: (power) => `กำลังจ่ายไฟ −${power.toFixed(1)} kW`,
        solarLimited: "จำกัดการผลิตโซลาร์",
        producing: "กำลังผลิตไฟ",
        standby: "รอทำงาน",
        chargeComplete: "ข่าวดี — บ้านของคุณใช้พลังงานได้เพียงพอ และแบตเตอรี่ชาร์จเต็มแล้ว",
        charging: "ข่าวดี — บ้านของคุณได้รับพลังงานจากโซลาร์ และแบตเตอรี่กำลังชาร์จ",
        homeCoveredSolar: "ยินดีด้วย — ความต้องการใช้ไฟในบ้านของคุณได้รับการดูแลด้วยพลังงานโซลาร์",
        homeCoveredBatteryFull: "ยินดีด้วย — ความต้องการใช้ไฟในบ้านได้รับการดูแล และแบตเตอรี่เต็มแล้ว",
        homeRunning: "ยินดีด้วย — บ้านของคุณกำลังใช้พลังงานจากระบบ SBS Solar",
        sending: "กำลังส่ง…",
        sendingDetails: "กำลังส่งรายละเอียดระบบของคุณ…",
        sent: "ขอบคุณ — SBS Solar ได้รับรายละเอียดระบบของคุณแล้ว และจะติดต่อกลับโดยเร็ว",
        failed: "เราไม่สามารถส่งคำขอของคุณได้ โปรดลองอีกครั้ง หรือติดต่อ sombunsap.official@gmail.com",
        submit: "ส่งระบบของฉันเพื่อให้ตรวจสอบ",
        emailSubject: "คำขอให้ตรวจสอบระบบโซลาร์เซลล์ใหม่",
        emailGreeting: "สวัสดี SBS Solar,",
        emailRequest: "ฉันต้องการให้ตรวจสอบระบบโซลาร์เซลล์ที่ฉันออกแบบใน Flow Demo",
        emailContactDetails: "ข้อมูลติดต่อ",
        emailName: "ชื่อ",
        emailAddress: "อีเมล",
        emailPhone: "โทรศัพท์",
        emailPropertyArea: "พื้นที่ของบ้าน",
        emailNotProvided: "ไม่ได้ระบุ",
        emailSelectedSystem: "ระบบที่เลือก",
        emailPanels: "แผง",
        emailBattery: "แบตเตอรี่",
        emailSeason: "การตั้งค่าตามฤดูกาล",
        emailHomeUse: "การใช้ไฟในบ้านโดยประมาณ",
        emailSolarPotential: "ศักยภาพพลังงานจากโซลาร์",
        emailGridImport: "ไฟฟ้าที่ใช้จากระบบไฟฟ้าโดยประมาณ",
        emailHomeCoverage: "บ้านที่ได้รับพลังงานจากระบบ",
        emailCustomerNote: "ข้อความจากลูกค้า",
        emailNoAdditionalNote: "ไม่มีข้อความเพิ่มเติม"
    };

    const requested = new URLSearchParams(window.location.search).get("lang");
    let saved = "en";
    try { saved = window.localStorage.getItem("sbs-language") || "en"; } catch (_) { /* Ignore blocked storage. */ }
    const language = requested === "th" || (!requested && saved === "th") ? "th" : "en";
    const isThai = () => language === "th";

    const translatePage = () => {
        if (!isThai()) return;
        document.documentElement.lang = "th";
        document.title = "ตัวอย่างระบบโซลาร์เซลล์ | SBS Solar";
        const description = document.querySelector('meta[name="description"]');
        if (description) description.content = "ตัวอย่างการไหลของพลังงานจากระบบโซลาร์เซลล์ SBS Solar สำหรับบ้านในหัวหิน";
        const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
        const nodes = [];
        while (walker.nextNode()) nodes.push(walker.currentNode);
        nodes.forEach((node) => {
            const leading = node.nodeValue.match(/^\s*/)[0];
            const trailing = node.nodeValue.match(/\s*$/)[0];
            const value = node.nodeValue.trim();
            if (thaiText[value]) node.nodeValue = `${leading}${thaiText[value]}${trailing}`;
        });
        document.querySelectorAll("[aria-label], [placeholder]").forEach((element) => {
            ["aria-label", "placeholder"].forEach((attribute) => {
                const value = element.getAttribute(attribute);
                if (thaiAttributes[value]) element.setAttribute(attribute, thaiAttributes[value]);
            });
        });
    };

    window.demoI18n = {
        isThai,
        dynamic: (key, ...args) => {
            if (!isThai()) return null;
            const translation = dynamicThai[key];
            return typeof translation === "function" ? translation(...args) : translation || null;
        }
    };

    document.addEventListener("DOMContentLoaded", () => {
        translatePage();
        document.querySelectorAll("[data-language]").forEach((button) => {
            button.setAttribute("aria-pressed", String(button.dataset.language === language));
            button.addEventListener("click", () => {
                const nextLanguage = button.dataset.language;
                if (nextLanguage === language) return;
                try { window.localStorage.setItem("sbs-language", nextLanguage); } catch (_) { /* URL remains usable. */ }
                const url = new URL(window.location.href);
                if (nextLanguage === "th") url.searchParams.set("lang", "th");
                else url.searchParams.delete("lang");
                window.location.href = url.toString();
            });
        });
    });
})();
