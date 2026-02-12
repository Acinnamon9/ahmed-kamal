<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ravan.ai - Book 300+ Appointments Monthly</title>
    <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet">
    <style>
        /* Base Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }


        .hero-section {
            background: linear-gradient(180deg, #faf8f5 0%, #f5ede5 100%);
            padding: 80px 20px;
            min-height: 100vh;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            position: relative;
            overflow: hidden;
        }

        /* Animated background elements */
        .hero-section::before {
            content: '';
            position: absolute;
            top: -200px;
            right: -200px;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(255, 87, 34, 0.06) 0%, transparent 70%);
            animation: float-orb 25s ease-in-out infinite;
            pointer-events: none;
        }

        .hero-section::after {
            content: '';
            position: absolute;
            bottom: -200px;
            left: -200px;
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(255, 87, 34, 0.04) 0%, transparent 70%);
            animation: float-orb 30s ease-in-out infinite reverse;
            pointer-events: none;
        }

        @keyframes float-orb {

            0%,
            100% {
                transform: translate(0, 0) scale(1);
            }

            33% {
                transform: translate(50px, -50px) scale(1.1);
            }

            66% {
                transform: translate(-30px, 30px) scale(0.9);
            }
        }

        .hero-container {
            max-width: 900px;
            margin: 0 auto;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            z-index: 1;
        }

        /* Premium Badge with 3-Line Rotation Enhanced */
        .premium-badge {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            background: white;
            padding: 14px 28px;
            border-radius: 50px;
            margin-bottom: 28px;
            border: 1px solid rgba(255, 87, 34, 0.25);
            box-shadow: 0 4px 16px rgba(255, 87, 34, 0.12);
            min-width: 420px;
            transition: all 0.3s ease;
            animation: badge-float 4s ease-in-out infinite;
            text-align: left;
            /* Keep text left-aligned inside the badge */
        }

        @keyframes badge-float {

            0%,
            100% {
                transform: translateY(0);
            }

            50% {
                transform: translateY(-4px);
            }
        }

        .premium-badge:hover {
            box-shadow: 0 6px 20px rgba(255, 87, 34, 0.18);
        }

        .badge-dot {
            width: 8px;
            height: 8px;
            background: #ff5722;
            border-radius: 50%;
            animation: pulse-dot 2s infinite;
            box-shadow: 0 0 0 0 rgba(255, 87, 34, 0.7);
        }

        @keyframes pulse-dot {

            0%,
            100% {
                opacity: 1;
                box-shadow: 0 0 0 0 rgba(255, 87, 34, 0.7);
            }

            50% {
                opacity: 0.6;
                box-shadow: 0 0 0 8px rgba(255, 87, 34, 0);
            }
        }

        .badge-text-wrapper {
            position: relative;
            height: 18px;
            overflow: hidden;
            flex: 1;
        }

        .badge-rotating-container {
            position: relative;
            height: 100%;
        }

        .badge-text {
            position: absolute;
            width: 100%;
            font-size: 13px;
            font-weight: 800;
            color: #ff5722;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            opacity: 0;
            transform: translateY(12px);
        }

        .badge-line-1 {
            animation: fadeRotate 9s infinite;
            animation-delay: 0s;
        }

        .badge-line-2 {
            animation: fadeRotate 9s infinite;
            animation-delay: 3s;
        }

        .badge-line-3 {
            animation: fadeRotate 9s infinite;
            animation-delay: 6s;
        }

        @keyframes fadeRotate {

            0%,
            100% {
                opacity: 0;
                transform: translateY(12px);
            }

            5%,
            28% {
                opacity: 1;
                transform: translateY(0);
            }

            33% {
                opacity: 0;
                transform: translateY(-12px);
            }
        }

        /* Headlines Enhanced */
        .headline {
            font-size: clamp(38px, 5.5vw, 62px);
            font-weight: 900;
            line-height: 1.08;
            color: #000;
            margin-bottom: 32px;
            letter-spacing: -0.03em;
            animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .headline-accent {
            color: #ff5722;
            display: inline-block;
            position: relative;
            background: linear-gradient(135deg, #ff5722, #ff8a65);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .headline-accent::after {
            content: '';
            position: absolute;
            bottom: -8px;
            left: 0;
            width: 100%;
            height: 5px;
            background: linear-gradient(90deg, #ff5722, #ff8a65);
            opacity: 0.35;
            border-radius: 3px;
            animation: expand-line 1s ease-out 0.3s forwards;
            transform: scaleX(0);
            transform-origin: left;
        }

        @keyframes expand-line {
            to {
                transform: scaleX(1);
            }
        }

        /* Subheadline Enhanced */
        .subheadline {
            font-size: clamp(18px, 2.3vw, 22px);
            color: #444;
            line-height: 1.65;
            margin: 0 auto 40px;
            max-width: 700px;
            font-weight: 400;
            animation: fadeInUp 0.8s ease-out 0.2s backwards;
        }

        .subheadline strong {
            color: #000;
            font-weight: 800;
        }

        .subheadline-strong {
            color: #000;
            font-weight: 800;
            background: linear-gradient(180deg, transparent 60%, rgba(255, 87, 34, 0.2) 60%);
            padding: 0 4px;
            border-radius: 2px;
        }

        /* Trust Numbers Enhanced */
        .trust-numbers {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 40px;
            flex-wrap: wrap;
            animation: fadeInUp 0.8s ease-out 0.4s backwards;
            width: 100%;
        }

        .trust-item {
            flex: 1;
            min-width: 100px;
            padding: 20px 16px;
            background: white;
            border-radius: 16px;
            box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
            border: 1px solid rgba(0, 0, 0, 0.04);
            text-align: center;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
        }

        .trust-item::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(255, 87, 34, 0.05) 0%, transparent 100%);
            opacity: 0;
            transition: opacity 0.3s ease;
        }

        .trust-item:hover::before {
            opacity: 1;
        }

        .trust-item:hover {
            transform: translateY(-6px) scale(1.03);
            box-shadow: 0 12px 28px rgba(255, 87, 34, 0.15);
            border-color: rgba(255, 87, 34, 0.2);
        }

        .trust-value {
            font-size: 36px;
            font-weight: 900;
            color: #ff5722;
            display: block;
            margin-bottom: 6px;
            letter-spacing: -0.02em;
        }

        .trust-label {
            font-size: 12px;
            color: #666;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            font-weight: 700;
        }

        /* CTA Buttons Enhanced - Pill Style */
        .cta-group {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-bottom: 36px;
            flex-wrap: wrap;
            animation: fadeInUp 0.8s ease-out 0.6s backwards;
        }

        .btn-pill {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            padding: 18px 36px;
            border-radius: 100px;
            font-size: 18px;
            font-weight: 700;
            text-decoration: none;
            border: none;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            position: relative;
            overflow: hidden;
            z-index: 1;
        }

        .btn-primary {
            background: #d33200;
            /* Deep Orange/Red from image */
            color: white;
            box-shadow: 0 10px 20px rgba(211, 50, 0, 0.2);
        }

        .btn-secondary {
            background: #2d2d2d;
            /* Dark Dark from image */
            color: white;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .btn-pill:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
        }

        /* Dot inside button */
        .btn-dot {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            position: relative;
        }

        .btn-primary .btn-dot {
            background: white;
        }

        .btn-secondary .btn-dot {
            border: 2px solid #555;
            background: transparent;
        }

        /* Pulse Animation starting from the dot */
        .btn-pill::after {
            content: '';
            position: absolute;
            width: 300%;
            padding-bottom: 300%;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.15);
            top: 50%;
            left: calc(100% - 40px);
            /* Center on the dot approximate position */
            transform: translate(-50%, -50%) scale(0);
            pointer-events: none;
            z-index: -1;
        }

        .btn-pill:hover::after {
            animation: pulse-from-dot 1.2s cubic-bezier(0, 0.55, 0.45, 1) infinite;
        }

        @keyframes pulse-from-dot {
            0% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 1;
            }

            100% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 0;
            }
        }

        /* Benefits Enhanced */
        .benefits-list {
            list-style: none;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            animation: fadeInUp 0.8s ease-out 0.8s backwards;
            width: 100%;
        }

        .benefit {
            color: #555;
            font-size: 16px;
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 16px 20px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 12px;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            border: 1px solid rgba(0, 0, 0, 0.04);
            font-weight: 500;
        }

        .benefit:hover {
            background: white;
            transform: translateX(8px);
            box-shadow: 0 4px 16px rgba(255, 87, 34, 0.1);
            border-color: rgba(255, 87, 34, 0.2);
        }

        .benefit-icon {
            width: 28px;
            height: 28px;
            background: linear-gradient(135deg, #ff5722, #ff8a65);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 16px;
            font-weight: 900;
            flex-shrink: 0;
            box-shadow: 0 4px 12px rgba(255, 87, 34, 0.3);
        }

        /* Video Section Enhanced */
        .video-wrapper {
            background: white;
            padding: 24px;
            border-radius: 24px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
            position: relative;
            border: 1px solid rgba(0, 0, 0, 0.06);
            transition: all 0.4s ease;
            animation: fadeInRight 0.8s ease-out 0.4s backwards;
        }

        @keyframes fadeInRight {
            from {
                opacity: 0;
                transform: translateX(30px);
            }

            to {
                opacity: 1;
                transform: translateX(0);
            }
        }

        .video-wrapper:hover {
            transform: translateY(-6px);
            box-shadow: 0 28px 70px rgba(0, 0, 0, 0.16);
        }

        .video-container {
            position: relative;
            aspect-ratio: 16/9;
            background: #000;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.1);
        }

        .video-container video {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        /* Hide/Show video based on viewport */
        .mobile-video {
            display: block;
            width: 100%;
            max-width: 800px;
            margin: 0 auto 40px;
        }

        .desktop-video {
            display: none;
        }

        /* Mobile Responsive Enhanced */
        @media (max-width: 968px) {
            .hero-section {
                padding: 60px 20px;
            }

            .hero-container {
                grid-template-columns: 1fr;
                gap: 0;
            }

            .premium-badge {
                min-width: 100%;
                padding: 12px 20px;
            }
        }

        @media (max-width: 768px) {
            .hero-section {
                padding: 50px 16px;
            }

            /* Show mobile video, hide desktop video */
            .mobile-video {
                display: block;
                margin-bottom: 32px;
                animation: fadeInUp 0.8s ease-out 0.3s backwards;
            }

            .desktop-video {
                display: none;
            }

            .headline {
                font-size: 34px;
                line-height: 1.12;
                margin-bottom: 24px;
            }

            .subheadline {
                font-size: 17px;
                line-height: 1.6;
                margin-bottom: 28px;
            }

            .trust-numbers {
                gap: 12px;
                margin-bottom: 28px;
            }

            .trust-item {
                padding: 16px 12px;
            }

            .trust-value {
                font-size: 28px;
            }

            .trust-label {
                font-size: 11px;
            }

            .cta-group {
                flex-direction: column;
                gap: 12px;
                margin-bottom: 24px;
            }

            .btn-primary,
            .btn-secondary {
                width: 100%;
                justify-content: center;
                padding: 20px 32px;
                font-size: 17px;
            }

            .benefits-list {
                gap: 12px;
                margin-bottom: 24px;
            }

            .benefit {
                padding: 14px 16px;
                font-size: 15px;
            }

            .benefit-icon {
                width: 26px;
                height: 26px;
                font-size: 15px;
            }

            .video-wrapper {
                padding: 16px;
            }
        }

        @media (max-width: 480px) {

            .hero-section::before,
            .hero-section::after {
                display: none;
            }

            .headline {
                font-size: 30px;
            }

            .premium-badge {
                min-width: 100%;
                padding: 10px 16px;
                gap: 10px;
            }

            .badge-text {
                font-size: 11px;
            }

            .trust-numbers {
                flex-direction: column;
                gap: 10px;
            }

            .trust-item {
                width: 100%;
            }
        }


        .lead-problem-section {
            background: linear-gradient(180deg, #faf8f5 0%, #ffffff 100%);
            padding: 120px 20px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            position: relative;
            overflow: hidden;
        }

        /* Animated background pattern */
        .lead-problem-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-image:
                radial-gradient(circle at 20% 50%, rgba(255, 87, 34, 0.04) 0%, transparent 40%),
                radial-gradient(circle at 80% 80%, rgba(255, 87, 34, 0.03) 0%, transparent 40%);
            pointer-events: none;
            animation: pulse-bg 8s ease-in-out infinite;
        }

        @keyframes pulse-bg {

            0%,
            100% {
                opacity: 1;
            }

            50% {
                opacity: 0.7;
            }
        }

        .lead-container {
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
        }

        /* Enhanced Header */
        .lead-header {
            text-align: center;
            margin-bottom: 90px;
            animation: fadeInUp 0.8s ease-out;
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .lead-badge {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: linear-gradient(135deg, #ff5722 0%, #ff8a65 100%);
            color: white;
            padding: 14px 28px;
            border-radius: 50px;
            font-size: 13px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 28px;
            box-shadow: 0 8px 24px rgba(255, 87, 34, 0.35);
            animation: badge-glow 3s ease-in-out infinite;
        }

        @keyframes badge-glow {

            0%,
            100% {
                box-shadow: 0 8px 24px rgba(255, 87, 34, 0.35);
            }

            50% {
                box-shadow: 0 12px 32px rgba(255, 87, 34, 0.5);
            }
        }

        .lead-badge svg {
            animation: shield-pulse 2s ease-in-out infinite;
        }

        @keyframes shield-pulse {

            0%,
            100% {
                transform: scale(1);
            }

            50% {
                transform: scale(1.1);
            }
        }

        .lead-title {
            font-size: clamp(36px, 5vw, 58px);
            font-weight: 900;
            color: #000;
            line-height: 1.15;
            margin-bottom: 28px;
            letter-spacing: -0.03em;
        }

        .lead-title .highlight {
            background: linear-gradient(135deg, #ff5722, #ff8a65);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            position: relative;
            display: inline-block;
        }

        .lead-title .highlight::after {
            content: '';
            position: absolute;
            bottom: -6px;
            left: 0;
            width: 100%;
            height: 4px;
            background: linear-gradient(90deg, #ff5722, #ff8a65);
            border-radius: 2px;
            animation: expand-underline 1.2s ease-out 0.5s forwards;
            transform: scaleX(0);
            transform-origin: left;
        }

        @keyframes expand-underline {
            to {
                transform: scaleX(1);
            }
        }

        .lead-subtitle {
            font-size: clamp(18px, 2.5vw, 22px);
            color: #666;
            line-height: 1.7;
            max-width: 800px;
            margin: 0 auto;
            font-weight: 400;
        }

        /* Enhanced Visual Flow Section */
        .flow-visual {
            background: white;
            border-radius: 28px;
            padding: 70px;
            margin-bottom: 70px;
            box-shadow:
                0 24px 70px rgba(0, 0, 0, 0.1),
                0 0 0 1px rgba(255, 87, 34, 0.08),
                inset 0 0 120px rgba(255, 87, 34, 0.02);
            position: relative;
            overflow: hidden;
            transition: transform 0.3s ease;
        }

        .flow-visual:hover {
            transform: translateY(-4px);
        }

        .flow-visual::before {
            content: '';
            position: absolute;
            top: -120px;
            right: -120px;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(255, 87, 34, 0.12) 0%, transparent 70%);
            animation: float-orb 25s ease-in-out infinite;
        }

        .flow-visual::after {
            content: '';
            position: absolute;
            bottom: -120px;
            left: -120px;
            width: 350px;
            height: 350px;
            background: radial-gradient(circle, rgba(255, 87, 34, 0.1) 0%, transparent 70%);
            animation: float-orb 25s ease-in-out infinite reverse;
        }

        @keyframes float-orb {

            0%,
            100% {
                transform: translate(0, 0) scale(1);
            }

            33% {
                transform: translate(40px, -40px) scale(1.08);
            }

            66% {
                transform: translate(-30px, 30px) scale(0.92);
            }
        }

        .flow-title {
            font-size: clamp(30px, 4vw, 38px);
            font-weight: 900;
            text-align: center;
            margin-bottom: 70px;
            color: #000;
            letter-spacing: -0.02em;
            position: relative;
            z-index: 1;
        }

        /* Enhanced Math Comparison */
        .math-comparison {
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            gap: 48px;
            margin-bottom: 70px;
            align-items: center;
            position: relative;
            z-index: 1;
        }

        .math-card {
            background: white;
            border-radius: 24px;
            padding: 48px;
            box-shadow: 0 16px 48px rgba(0, 0, 0, 0.1);
            position: relative;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .math-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 24px 64px rgba(0, 0, 0, 0.15);
        }

        .math-card.current {
            border: 3px solid #ff0000;
            background: linear-gradient(135deg, rgba(255, 0, 0, 0.03) 0%, rgba(255, 255, 255, 1) 100%);
        }

        .math-card.ai {
            border: 3px solid #00aa00;
            background: linear-gradient(135deg, rgba(0, 200, 0, 0.03) 0%, rgba(255, 255, 255, 1) 100%);
        }

        .math-card-header {
            text-align: center;
            margin-bottom: 36px;
        }

        .math-label {
            font-size: 14px;
            font-weight: 800;
            letter-spacing: 0.1em;
            text-transform: uppercase;
        }

        .current .math-label {
            color: #ff0000;
        }

        .ai .math-label {
            color: #00aa00;
        }

        .math-items {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }

        .math-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.08);
        }

        .math-item:last-child {
            border-bottom: none;
            padding-top: 20px;
            border-top: 3px solid rgba(0, 0, 0, 0.12);
            margin-top: 12px;
        }

        .math-item-label {
            font-size: 16px;
            color: #666;
            font-weight: 500;
        }

        .math-item-value {
            font-size: 20px;
            font-weight: 800;
            color: #000;
        }

        .math-item.highlight .math-item-label {
            font-weight: 800;
            color: #000;
        }

        .math-item.highlight .math-item-value.big {
            font-size: 38px;
        }

        .current .math-item.highlight .math-item-value {
            color: #ff0000;
        }

        .ai .math-item.highlight .math-item-value {
            color: #00aa00;
        }

        .vs-circle {
            width: 70px;
            height: 70px;
            background: linear-gradient(135deg, #ff5722, #ff8a65);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 900;
            font-size: 22px;
            box-shadow: 0 12px 32px rgba(255, 87, 34, 0.4);
            animation: vs-pulse 2s ease-in-out infinite;
        }

        @keyframes vs-pulse {

            0%,
            100% {
                transform: scale(1);
            }

            50% {
                transform: scale(1.08);
            }
        }

        .math-punchline {
            text-align: center;
            font-size: clamp(22px, 3vw, 28px);
            font-weight: 800;
            color: #333;
            margin-bottom: 70px;
            position: relative;
            z-index: 1;
        }

        .math-punchline span {
            color: #ff5722;
            font-weight: 900;
        }

        /* Enhanced Timeline Section */
        .timeline-section {
            background: linear-gradient(135deg, #1a0f08 0%, #2c1810 100%);
            border-radius: 28px;
            padding: 64px;
            margin-bottom: 70px;
            position: relative;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .timeline-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at 30% 50%, rgba(255, 87, 34, 0.08) 0%, transparent 60%);
            animation: pulse-timeline 6s ease-in-out infinite;
        }

        @keyframes pulse-timeline {

            0%,
            100% {
                opacity: 0.5;
            }

            50% {
                opacity: 1;
            }
        }

        .timeline-title {
            font-size: clamp(28px, 3.5vw, 36px);
            font-weight: 900;
            color: white;
            text-align: center;
            margin-bottom: 56px;
            position: relative;
            z-index: 1;
        }

        .timeline-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 40px;
            position: relative;
            z-index: 1;
        }

        .timeline-item {
            text-align: center;
            position: relative;
            transition: transform 0.3s ease;
        }

        .timeline-item:hover {
            transform: translateY(-8px);
        }

        .timeline-time {
            font-size: 48px;
            font-weight: 900;
            background: linear-gradient(135deg, #ff5722, #ff8a65);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-bottom: 16px;
            letter-spacing: -0.02em;
        }

        .timeline-event {
            font-size: 19px;
            font-weight: 700;
            color: white;
            margin-bottom: 10px;
        }

        .timeline-result {
            font-size: 15px;
            color: rgba(255, 255, 255, 0.75);
            font-weight: 500;
        }

        .timeline-result.lost {
            color: #ff5555;
            font-weight: 600;
        }

        .timeline-result.won {
            color: #4ade80;
            font-weight: 600;
        }

        /* Enhanced Failure Cards */
        .failure-cards-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 36px;
            margin-top: 70px;
            position: relative;
            z-index: 1;
        }

        .failure-card {
            background: white;
            border-radius: 24px;
            padding: 48px;
            text-align: center;
            position: relative;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border: 2px solid rgba(255, 87, 34, 0.12);
        }

        .failure-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(255, 87, 34, 0.02) 0%, transparent 100%);
            opacity: 0;
            transition: opacity 0.4s ease;
        }

        .failure-card:hover::before {
            opacity: 1;
        }

        .failure-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 50px rgba(255, 87, 34, 0.2);
            border-color: rgba(255, 87, 34, 0.4);
        }

        .failure-icon-box {
            width: 90px;
            height: 90px;
            margin: 0 auto 28px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #ff5722, #ff8a65);
            box-shadow: 0 12px 32px rgba(255, 87, 34, 0.4);
            transition: all 0.3s ease;
        }

        .failure-card:hover .failure-icon-box {
            transform: rotate(8deg) scale(1.1);
            box-shadow: 0 16px 40px rgba(255, 87, 34, 0.5);
        }

        .failure-icon-box svg {
            width: 44px;
            height: 44px;
            stroke: white;
            fill: none;
            stroke-width: 2.5;
        }

        .failure-title {
            font-size: 24px;
            font-weight: 800;
            color: #000;
            margin-bottom: 18px;
            letter-spacing: -0.01em;
        }

        .failure-description {
            font-size: 16px;
            color: #666;
            line-height: 1.7;
            margin-bottom: 28px;
        }

        .failure-metric {
            font-size: 56px;
            font-weight: 900;
            color: #ff5722;
            margin-bottom: 12px;
            letter-spacing: -0.02em;
        }

        .failure-metric-label {
            font-size: 13px;
            font-weight: 800;
            color: #ff5722;
            letter-spacing: 0.12em;
            text-transform: uppercase;
        }

        /* Enhanced Funnel Section */
        .diagram-section {
            background: linear-gradient(135deg, #1a0f08 0%, #2c1810 100%);
            border-radius: 28px;
            padding: 70px;
            margin-bottom: 70px;
            position: relative;
            overflow: hidden;
            box-shadow:
                0 32px 90px rgba(0, 0, 0, 0.35),
                inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }

        .diagram-section::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -25%;
            width: 700px;
            height: 700px;
            background: radial-gradient(circle, rgba(255, 87, 34, 0.18) 0%, transparent 60%);
            animation: rotate-slow 35s linear infinite;
        }

        .diagram-section::after {
            content: '';
            position: absolute;
            bottom: -50%;
            left: -25%;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(0, 200, 0, 0.12) 0%, transparent 60%);
            animation: rotate-slow 45s linear infinite reverse;
        }

        @keyframes rotate-slow {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }

        .diagram-title {
            font-size: clamp(30px, 4vw, 38px);
            font-weight: 900;
            color: white;
            text-align: center;
            margin-bottom: 56px;
            position: relative;
            z-index: 1;
            text-shadow: 0 3px 12px rgba(0, 0, 0, 0.4);
        }

        .funnel-diagram {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 56px;
            position: relative;
            z-index: 1;
        }

        .funnel {
            position: relative;
            background: rgba(255, 255, 255, 0.06);
            border-radius: 24px;
            padding: 44px;
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.12);
            transition: all 0.4s ease;
        }

        .funnel:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateY(-6px);
            box-shadow:
                0 24px 48px rgba(0, 0, 0, 0.25),
                0 0 70px rgba(255, 255, 255, 0.06);
        }

        .manual-funnel {
            border-color: rgba(255, 0, 0, 0.35);
            background: linear-gradient(135deg, rgba(255, 0, 0, 0.04) 0%, rgba(255, 255, 255, 0.06) 100%);
        }

        .manual-funnel:hover {
            box-shadow:
                0 24px 48px rgba(255, 0, 0, 0.25),
                0 0 50px rgba(255, 0, 0, 0.12);
        }

        .ai-funnel {
            border-color: rgba(0, 200, 0, 0.35);
            background: linear-gradient(135deg, rgba(0, 200, 0, 0.1) 0%, rgba(255, 255, 255, 0.06) 100%);
        }

        .ai-funnel:hover {
            box-shadow:
                0 24px 48px rgba(0, 200, 0, 0.25),
                0 0 50px rgba(0, 200, 0, 0.12);
        }

        .funnel-header {
            text-align: center;
            margin-bottom: 36px;
        }

        .funnel-name {
            font-size: 24px;
            font-weight: 800;
            color: white;
            margin-bottom: 10px;
            letter-spacing: -0.01em;
        }

        .funnel-type {
            font-size: 14px;
            color: rgba(255, 255, 255, 0.65);
            text-transform: uppercase;
            letter-spacing: 0.08em;
            font-weight: 600;
        }

        .funnel-visual {
            width: 100%;
            height: 400px;
            position: relative;
            margin: 0 auto;
            padding-bottom: 20px;
        }

        .funnel-stage {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .funnel-stage:hover {
            transform: translateX(-50%) scale(1.06);
            z-index: 10;
        }

        .stage-bar {
            height: 48px;
            border-radius: 14px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 800;
            font-size: 16px;
            margin-bottom: 8px;
            position: relative;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
            letter-spacing: 0.3px;
            padding: 0 24px;
            min-width: 120px;
            width: 100%;
        }

        .manual-funnel .stage-bar {
            background: linear-gradient(90deg, #ff0000, #ff6666);
        }

        .ai-funnel .stage-bar {
            background: linear-gradient(90deg, #00aa00, #00dd00);
            box-shadow: 0 10px 28px rgba(0, 200, 0, 0.35);
            position: relative;
            overflow: hidden;
        }

        .ai-funnel .stage-bar::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.35), transparent);
            animation: shine-slow 4s infinite;
        }

        @keyframes shine-slow {
            0% {
                left: -100%;
            }

            100% {
                left: 100%;
            }
        }

        .stage-label {
            font-size: 12px;
            color: rgba(255, 255, 255, 0.8);
            line-height: 1.3;
            font-weight: 500;
            margin-top: 8px;
            text-align: center;
            white-space: nowrap;
        }

        .ai-badge-float {
            position: absolute;
            top: -12px;
            right: -70px;
            background: linear-gradient(135deg, #ff5722, #ff8a65);
            color: white;
            padding: 8px 16px;
            border-radius: 22px;
            font-size: 11px;
            font-weight: 800;
            letter-spacing: 0.06em;
            box-shadow: 0 6px 16px rgba(255, 87, 34, 0.4);
            animation: float-badge-enhanced 3.5s ease-in-out infinite;
        }

        @keyframes float-badge-enhanced {

            0%,
            100% {
                transform: translateY(0) rotate(-2deg);
            }

            50% {
                transform: translateY(-6px) rotate(2deg);
            }
        }

        .stage-1 {
            width: 100%;
            top: 0;
        }

        .stage-2 {
            width: 85%;
            top: 80px;
        }

        .stage-3 {
            width: 70%;
            top: 160px;
        }

        .stage-4 {
            width: 55%;
            top: 240px;
        }

        .stage-5 {
            width: 40%;
            top: 320px;
        }

        .manual-funnel .stage-1 {
            width: 90%;
        }

        .manual-funnel .stage-2 {
            width: 50%;
        }

        .manual-funnel .stage-3 {
            width: 35%;
        }

        .manual-funnel .stage-4 {
            width: 20%;
        }

        .manual-funnel .stage-5 {
            width: 12%;
        }

        /* Enhanced Stats */
        .stats-comparison {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
            margin-bottom: 70px;
        }

        .stat-card {
            background: white;
            border-radius: 24px;
            padding: 48px;
            text-align: center;
            position: relative;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .stat-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
        }

        .stat-card.loss {
            border: 3px solid #ff0000;
            background: linear-gradient(135deg, rgba(255, 0, 0, 0.03) 0%, rgba(255, 0, 0, 0.06) 100%);
        }

        .stat-card.win {
            border: 3px solid #00aa00;
            background: linear-gradient(135deg, rgba(0, 200, 0, 0.03) 0%, rgba(0, 200, 0, 0.06) 100%);
        }

        .stat-icon {
            width: 80px;
            height: 80px;
            margin: 0 auto 28px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: transform 0.3s ease;
        }

        .stat-card:hover .stat-icon {
            transform: scale(1.1) rotate(5deg);
        }

        .loss .stat-icon {
            background: linear-gradient(135deg, #ff0000, #ff6666);
            box-shadow: 0 8px 24px rgba(255, 0, 0, 0.3);
        }

        .win .stat-icon {
            background: linear-gradient(135deg, #00aa00, #00dd00);
            box-shadow: 0 8px 24px rgba(0, 200, 0, 0.3);
        }

        .stat-icon svg {
            width: 40px;
            height: 40px;
            stroke: white;
            fill: none;
            stroke-width: 2.5;
        }

        .stat-title {
            font-size: 24px;
            font-weight: 800;
            margin-bottom: 18px;
            color: #000;
        }

        .stat-value {
            font-size: clamp(42px, 6vw, 56px);
            font-weight: 900;
            margin-bottom: 12px;
            letter-spacing: -0.02em;
        }

        .loss .stat-value {
            color: #ff0000;
        }

        .win .stat-value {
            color: #00aa00;
        }

        .stat-desc {
            font-size: 15px;
            color: #666;
            font-weight: 500;
        }

        /* Enhanced CTA */
        .lead-cta {
            text-align: center;
            padding: 70px;
            background: linear-gradient(135deg, #ffffff 0%, #faf8f5 100%);
            border-radius: 28px;
            border: 2px solid rgba(255, 87, 34, 0.15);
            position: relative;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(255, 87, 34, 0.08);
        }

        .lead-cta::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255, 87, 34, 0.06) 0%, transparent 70%);
            animation: rotate-slow 35s linear infinite reverse;
        }

        .lead-cta-content {
            position: relative;
            z-index: 1;
        }

        .lead-cta-title {
            font-size: clamp(30px, 4.5vw, 42px);
            font-weight: 900;
            color: #000;
            margin-bottom: 20px;
            letter-spacing: -0.02em;
        }

        .lead-cta-text {
            font-size: clamp(18px, 2.5vw, 21px);
            color: #666;
            margin-bottom: 40px;
            line-height: 1.6;
        }

        .lead-cta-text strong {
            color: #ff5722;
            font-weight: 800;
        }

        .lead-cta-button {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            background: linear-gradient(135deg, #ff5722, #ff6a3d);
            color: white;
            padding: 22px 50px;
            border-radius: 14px;
            font-size: 19px;
            font-weight: 800;
            text-decoration: none;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 16px 40px rgba(255, 87, 34, 0.35);
            letter-spacing: -0.01em;
        }

        .lead-cta-button:hover {
            transform: translateY(-4px) scale(1.03);
            box-shadow: 0 20px 50px rgba(255, 87, 34, 0.5);
        }

        /* Mobile Optimization */
        @media (max-width: 968px) {
            .lead-problem-section {
                padding: 80px 20px;
            }

            .flow-visual {
                padding: 48px 32px;
            }

            .math-comparison {
                grid-template-columns: 1fr;
                gap: 32px;
            }

            .vs-circle {
                width: 60px;
                height: 60px;
                font-size: 18px;
                margin: 0 auto;
            }

            .funnel-diagram {
                grid-template-columns: 1fr;
                gap: 48px;
            }

            .stats-comparison {
                grid-template-columns: 1fr;
                gap: 32px;
            }

            .failure-cards-grid {
                grid-template-columns: 1fr;
                gap: 28px;
            }
        }

        @media (max-width: 640px) {
            .lead-problem-section {
                padding: 60px 16px;
            }

            .flow-visual {
                padding: 36px 24px;
            }

            .math-card {
                padding: 36px 28px;
            }

            .timeline-section {
                padding: 48px 28px;
            }

            .diagram-section {
                padding: 48px 24px;
            }

            .funnel {
                padding: 32px 20px;
            }

            .ai-badge-float {
                right: -40px;
                font-size: 10px;
                padding: 6px 12px;
            }

            .stat-card {
                padding: 36px 28px;
            }

            .lead-cta {
                padding: 48px 28px;
            }

            .lead-cta-button {
                padding: 20px 40px;
                font-size: 17px;
                width: 100%;
                justify-content: center;
            }
        }


        .workforce-main-section {
            background: #ffffff;
            padding: 100px 20px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            position: relative;
            overflow: hidden;
        }

        .workforce-container {
            max-width: 1400px;
            margin: 0 auto;
            position: relative;
            z-index: 2;
        }

        /* Enhanced Header */
        .workforce-header {
            text-align: center;
            max-width: 900px;
            margin: 0 auto 90px;
        }

        .workforce-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: linear-gradient(135deg, #FF5722 0%, #FF8A65 100%);
            color: white;
            padding: 10px 24px;
            border-radius: 50px;
            font-weight: 700;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin-bottom: 32px;
            box-shadow: 0 8px 20px rgba(255, 87, 34, 0.25);
            animation: fadeInDown 0.8s ease-out;
        }

        .workforce-title {
            font-size: 56px;
            font-weight: 900;
            color: #1a1a1a;
            line-height: 1.1;
            margin-bottom: 24px;
            letter-spacing: -0.02em;
            animation: fadeInUp 0.8s ease-out 0.2s backwards;
        }

        .workforce-subtitle {
            font-size: 20px;
            color: #666;
            line-height: 1.6;
            animation: fadeInUp 0.8s ease-out 0.4s backwards;
        }

        /* Enhanced Grid */
        .workforce-roles-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 40px;
            margin-bottom: 80px;
        }

        /* Glass Card Effect */
        .workforce-glass-card {
            background: rgba(255, 255, 255, 0.9);
            border: 1px solid rgba(0, 0, 0, 0.04);
            backdrop-filter: blur(20px);
            border-radius: 32px;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.03);
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            overflow: hidden;
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .workforce-glass-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 30px 80px rgba(0, 0, 0, 0.08);
            border-color: rgba(255, 87, 34, 0.15);
        }

        .workforce-role-header {
            padding: 40px;
            background: linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0));
            border-bottom: 1px solid rgba(0, 0, 0, 0.03);
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }

        .workforce-icon-box {
            width: 72px;
            height: 72px;
            background: linear-gradient(135deg, #FF5722 0%, #FF8A65 100%);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 32px;
            box-shadow: 0 16px 32px rgba(255, 87, 34, 0.2);
            margin-right: 24px;
            flex-shrink: 0;
            transition: transform 0.3s ease;
        }

        .workforce-glass-card:hover .workforce-icon-box {
            transform: scale(1.1) rotate(5deg);
        }

        .workforce-role-info h3 {
            font-size: 28px;
            font-weight: 800;
            color: #1a1a1a;
            margin-bottom: 8px;
            letter-spacing: -0.01em;
        }

        .workforce-role-salary {
            display: inline-block;
            padding: 6px 12px;
            background: #f0fdf4;
            color: #166534;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 700;
            border: 1px solid #dcfce7;
        }

        .workforce-role-content {
            padding: 40px;
            flex-grow: 1;
            display: flex;
            flex-direction: column;
        }

        /* Features List */
        .workforce-features {
            display: grid;
            gap: 16px;
            margin-bottom: 32px;
            flex-grow: 1;
        }

        .workforce-feature-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            color: #4b5563;
            font-size: 16px;
            line-height: 1.5;
            padding: 12px;
            background: #f9fafb;
            border-radius: 12px;
            transition: all 0.3s ease;
        }

        .workforce-feature-item:hover {
            background: white;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
            transform: translateX(4px);
        }

        .workforce-check {
            color: #FF5722;
            font-weight: 900;
            font-size: 18px;
            margin-top: 1px;
        }

        /* Stats in Cards */
        .workforce-card-stats {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            margin-top: auto;
            padding-top: 24px;
            border-top: 1px solid rgba(0, 0, 0, 0.04);
        }

        .workforce-stat-box {
            text-align: center;
            padding: 16px;
            background: #fff;
            border-radius: 16px;
            border: 1px solid rgba(0, 0, 0, 0.04);
        }

        .workforce-stat-value {
            display: block;
            font-size: 24px;
            font-weight: 800;
            color: #FF5722;
            margin-bottom: 4px;
        }

        .workforce-stat-label {
            font-size: 12px;
            color: #6b7280;
            font-weight: 600;
            text-transform: uppercase;
        }

        /* CTA Section */
        .workforce-cta-section {
            text-align: center;
            margin-top: 20px;
            animation: fadeInUp 0.8s ease-out 0.6s backwards;
        }

        .workforce-cta-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #FF5722 0%, #FF8A65 100%);
            color: white;
            font-size: 20px;
            font-weight: 800;
            padding: 24px 56px;
            border-radius: 16px;
            text-decoration: none;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 20px 40px -10px rgba(255, 87, 34, 0.4);
            letter-spacing: -0.01em;
        }

        .workforce-cta-btn:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 30px 60px -15px rgba(255, 87, 34, 0.5);
        }

        /* Animations */
        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }

            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Responsive */
        @media (max-width: 1024px) {
            .workforce-roles-grid {
                grid-template-columns: 1fr;
                gap: 32px;
            }

            .workforce-title {
                font-size: 42px;
            }
        }

        @media (max-width: 640px) {
            .workforce-main-section {
                padding: 60px 16px;
            }

            .workforce-title {
                font-size: 32px;
            }

            .workforce-role-header {
                padding: 24px;
                flex-direction: column;
                gap: 20px;
            }

            .workforce-icon-box {
                margin-right: 0;
                width: 60px;
                height: 60px;
                font-size: 24px;
            }

            .workforce-role-content {
                padding: 24px;
            }

            .workforce-card-stats {
                grid-template-columns: 1fr;
            }

            .workforce-cta-btn {
                width: 100%;
                padding: 20px 32px;
                font-size: 18px;
            }
        }


        .proof-main-section {
            background-color: #faf8f5;
            padding: 100px 20px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            position: relative;
            overflow: hidden;
        }

        .proof-container {
            max-width: 1200px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
        }

        /* Enhanced Header */
        .proof-header {
            text-align: center;
            max-width: 800px;
            margin: 0 auto 70px;
        }

        .proof-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(255, 87, 34, 0.1);
            color: #ff5722;
            padding: 8px 16px;
            border-radius: 50px;
            font-weight: 700;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin-bottom: 24px;
            border: 1px solid rgba(255, 87, 34, 0.2);
        }

        .proof-title {
            font-size: 48px;
            font-weight: 900;
            color: #1a1a1a;
            line-height: 1.1;
            margin-bottom: 24px;
            letter-spacing: -0.02em;
        }

        .proof-subtitle {
            font-size: 20px;
            color: #666;
            line-height: 1.6;
        }

        /* Case Study Card Enhanced */
        .proof-case-study {
            background: white;
            border-radius: 32px;
            padding: 60px;
            box-shadow: 0 24px 80px rgba(0, 0, 0, 0.06);
            margin-bottom: 80px;
            position: relative;
            overflow: hidden;
            border: 1px solid rgba(0, 0, 0, 0.04);
        }

        .proof-case-study::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 6px;
            background: linear-gradient(90deg, #ff5722, #ff8a65);
        }

        .proof-case-header {
            display: flex;
            align-items: center;
            gap: 24px;
            margin-bottom: 48px;
            padding-bottom: 32px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.06);
        }

        .company-logo {
            width: 80px;
            height: 80px;
            background: #f5f5f5;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            color: #ccc;
            font-size: 14px;
        }

        .proof-case-title {
            font-size: 32px;
            font-weight: 800;
            color: #1a1a1a;
            line-height: 1.2;
        }

        .proof-metrics-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-bottom: 48px;
        }

        .proof-metric-card {
            background: #fcfcfc;
            border-radius: 20px;
            padding: 24px;
            border: 1px solid rgba(0, 0, 0, 0.04);
            text-align: center;
            transition: all 0.3s ease;
        }

        .proof-metric-card:hover {
            transform: translateY(-4px);
            background: #fff5f2;
            border-color: rgba(255, 87, 34, 0.1);
        }

        .proof-metric-value {
            font-size: 36px;
            font-weight: 900;
            color: #ff5722;
            margin-bottom: 8px;
            display: block;
        }

        .proof-metric-label {
            font-size: 13px;
            color: #666;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }

        .proof-content-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 48px;
        }

        /* Challenge/Solution styles */
        .proof-section h3 {
            font-size: 18px;
            font-weight: 800;
            color: #1a1a1a;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .proof-section p {
            font-size: 16px;
            color: #555;
            line-height: 1.7;
            margin-bottom: 24px;
        }

        .proof-list {
            list-style: none;
        }

        .proof-list li {
            position: relative;
            padding-left: 24px;
            margin-bottom: 12px;
            color: #555;
            font-size: 15px;
        }

        .proof-list li::before {
            content: "•";
            color: #ff5722;
            font-weight: bold;
            position: absolute;
            left: 0;
            top: 0;
        }

        /* Testimonial Enhanced */
        .proof-testimonial {
            background: #1a1a1a;
            border-radius: 24px;
            padding: 40px;
            color: white;
            position: relative;
            overflow: hidden;
        }

        .proof-testimonial::before {
            content: '"';
            position: absolute;
            top: 20px;
            left: 20px;
            font-size: 120px;
            line-height: 1;
            color: rgba(255, 255, 255, 0.05);
            font-family: serif;
        }

        .testimonial-text {
            font-size: 18px;
            line-height: 1.7;
            margin-bottom: 24px;
            position: relative;
            z-index: 1;
            font-style: italic;
        }

        .testimonial-author {
            display: flex;
            align-items: center;
            gap: 16px;
        }

        .author-avatar {
            width: 48px;
            height: 48px;
            background: #333;
            border-radius: 50%;
        }

        .author-info h4 {
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 4px;
        }

        .author-info p {
            font-size: 13px;
            color: rgba(255, 255, 255, 0.6);
        }

        /* Trusted By Logos */
        .trusted-section {
            text-align: center;
            padding-top: 40px;
            border-top: 1px solid rgba(0, 0, 0, 0.06);
        }

        .trusted-label {
            font-size: 12px;
            font-weight: 700;
            color: #999;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            margin-bottom: 32px;
        }

        .logos-grid {
            display: flex;
            justify-content: center;
            gap: 48px;
            flex-wrap: wrap;
            opacity: 0.6;
        }

        .logo-item {
            font-weight: 800;
            font-size: 20px;
            color: #ccc;
        }

        /* CTA */
        .proof-cta-wrapper {
            text-align: center;
            margin-top: 60px;
        }

        .proof-cta-btn {
            display: inline-flex;
            align-items: center;
            gap: 12px;
            background: #1a1a1a;
            color: white;
            padding: 20px 48px;
            border-radius: 14px;
            font-size: 18px;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .proof-cta-btn:hover {
            transform: translateY(-4px);
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
        }

        /* Responsive */
        @media (max-width: 968px) {
            .proof-metrics-grid {
                grid-template-columns: 1fr;
            }

            .proof-content-grid {
                grid-template-columns: 1fr;
                gap: 32px;
            }

            .proof-case-study {
                padding: 32px;
            }

            .proof-header {
                margin-bottom: 50px;
            }

            .proof-title {
                font-size: 36px;
            }
        }


        .faq-main-section {
            background: #ffffff;
            padding: 100px 20px;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            position: relative;
            z-index: 1;
        }

        .faq-container {
            max-width: 900px;
            margin: 0 auto;
        }

        .faq-header {
            text-align: center;
            margin-bottom: 70px;
        }

        .faq-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: linear-gradient(135deg, #FF5722 0%, #FF8A65 100%);
            color: white;
            padding: 10px 24px;
            border-radius: 50px;
            font-weight: 700;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin-bottom: 24px;
            box-shadow: 0 8px 20px rgba(255, 87, 34, 0.25);
        }

        .faq-title {
            font-size: 48px;
            font-weight: 900;
            color: #1a1a1a;
            line-height: 1.1;
            margin-bottom: 24px;
            letter-spacing: -0.02em;
        }

        .faq-subtitle {
            font-size: 20px;
            color: #666;
            line-height: 1.6;
            max-width: 600px;
            margin: 0 auto;
        }

        .faq-grid {
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        .faq-item {
            border: 1px solid rgba(0, 0, 0, 0.06);
            border-radius: 20px;
            background: #fcfcfc;
            transition: all 0.3s ease;
            overflow: hidden;
        }

        .faq-item:hover {
            border-color: rgba(255, 87, 34, 0.2);
            background: white;
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.04);
            transform: translateY(-2px);
        }

        .faq-item.active {
            background: white;
            border-color: rgba(255, 87, 34, 0.15);
            box-shadow: 0 16px 40px rgba(255, 87, 34, 0.08);
        }

        .faq-question {
            width: 100%;
            text-align: left;
            padding: 28px 32px;
            background: none;
            border: none;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
            font-size: 19px;
            font-weight: 700;
            color: #1a1a1a;
            transition: color 0.3s ease;
        }

        .faq-item:hover .faq-question {
            color: #FF5722;
        }

        .faq-icon {
            width: 32px;
            height: 32px;
            min-width: 32px;
            height: 32px;
            background: rgba(255, 87, 34, 0.08);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
            color: #FF5722;
        }

        .faq-item.active .faq-icon {
            background: #FF5722;
            color: white;
            transform: rotate(45deg);
        }

        .faq-answer {
            max-height: 0;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            padding: 0 32px;
        }

        .faq-answer-content {
            padding-bottom: 32px;
            color: #555;
            line-height: 1.7;
            font-size: 16px;
        }

        .faq-answer-content p {
            margin-bottom: 16px;
        }

        .faq-answer-content p:last-child {
            margin-bottom: 0;
        }

        .faq-list {
            list-style: none;
            margin-top: 16px;
            background: #faf8f5;
            padding: 20px 24px;
            border-radius: 12px;
        }

        .faq-list li {
            position: relative;
            padding-left: 20px;
            margin-bottom: 10px;
            font-size: 15px;
            color: #444;
        }

        .faq-list li:last-child {
            margin-bottom: 0;
        }

        .faq-list li::before {
            content: "•";
            color: #FF5722;
            position: absolute;
            left: 0;
            font-weight: bold;
        }

        /* Bottom CTA */
        .faq-cta-section {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 24px;
            margin-top: 60px;
            padding-top: 60px;
            border-top: 1px solid rgba(0, 0, 0, 0.06);
        }

        .faq-cta-text {
            font-size: 18px;
            color: #666;
            font-weight: 500;
        }

        .faq-cta-button {
            background: #1a1a1a;
            color: white;
            padding: 16px 32px;
            border-radius: 12px;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .faq-cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
        }

        /* Responsive */
        @media (max-width: 768px) {
            .faq-main-section {
                padding: 60px 16px;
            }

            .faq-title {
                font-size: 36px;
            }

            .faq-question {
                font-size: 17px;
                padding: 20px 24px;
            }

            .faq-answer {
                padding: 0 24px;
            }

            .faq-cta-section {
                flex-direction: column;
                gap: 16px;
                text-align: center;
            }
        }


        .final-cta-section {
            background: #1a1a1a;
            padding: 120px 20px;
            text-align: center;
            color: white;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            position: relative;
            overflow: hidden;
        }

        /* Animated background elements */
        .final-cta-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background:
                radial-gradient(circle at 20% 20%, rgba(255, 87, 34, 0.08) 0%, transparent 40%),
                radial-gradient(circle at 80% 80%, rgba(255, 87, 34, 0.06) 0%, transparent 40%);
            pointer-events: none;
        }

        .final-cta-content {
            max-width: 900px;
            margin: 0 auto;
            position: relative;
            z-index: 1;
        }

        .final-cta-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            background: rgba(255, 255, 255, 0.1);
            color: #ff8a65;
            padding: 10px 24px;
            border-radius: 50px;
            font-weight: 700;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            margin-bottom: 32px;
            border: 1px solid rgba(255, 87, 34, 0.2);
            backdrop-filter: blur(10px);
        }

        .final-cta-title {
            font-size: clamp(42px, 5vw, 64px);
            font-weight: 900;
            margin-bottom: 32px;
            line-height: 1.1;
            letter-spacing: -0.02em;
        }

        .final-cta-title span {
            background: linear-gradient(135deg, #ff5722, #ff8a65);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        .final-cta-subtitle {
            font-size: clamp(20px, 2.5vw, 24px);
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.6;
            margin-bottom: 56px;
            font-weight: 400;
        }

        .final-cta-buttons {
            display: flex;
            flex-direction: column;
            gap: 16px;
            align-items: center;
            margin-bottom: 60px;
        }

        .final-primary-btn {
            background: linear-gradient(135deg, #ff5722, #ff6a3d);
            color: white;
            padding: 24px 64px;
            border-radius: 16px;
            font-size: 22px;
            font-weight: 800;
            text-decoration: none;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 20px 40px -10px rgba(255, 87, 34, 0.4);
            letter-spacing: -0.01em;
            position: relative;
            overflow: hidden;
        }

        .final-primary-btn:hover {
            transform: translateY(-4px) scale(1.02);
            box-shadow: 0 30px 60px -15px rgba(255, 87, 34, 0.5);
        }

        .final-secondary-btn {
            color: rgba(255, 255, 255, 0.6);
            font-size: 16px;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s ease;
        }

        .final-secondary-btn:hover {
            color: white;
        }

        .final-benefits {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 32px;
            text-align: center;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 60px;
        }

        .final-benefit-item {
            color: white;
        }

        .final-benefit-value {
            font-size: 36px;
            font-weight: 900;
            color: white;
            margin-bottom: 8px;
            display: block;
        }

        .final-benefit-label {
            font-size: 13px;
            color: rgba(255, 255, 255, 0.5);
            text-transform: uppercase;
            letter-spacing: 0.08em;
            font-weight: 700;
        }

        /* Footer */
        .footer-section {
            background: #0f0f0f;
            padding: 80px 20px 40px;
            color: rgba(255, 255, 255, 0.4);
            font-size: 14px;
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .footer-container {
            max-width: 1200px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1.5fr 1fr 1fr 1fr;
            gap: 60px;
            margin-bottom: 60px;
        }

        .footer-brand {
            margin-bottom: 24px;
        }

        .footer-logo {
            color: white;
            font-size: 24px;
            font-weight: 800;
            text-decoration: none;
            display: inline-block;
            margin-bottom: 16px;
        }

        .footer-desc {
            line-height: 1.6;
            max-width: 300px;
        }

        .footer-col h4 {
            color: white;
            font-size: 16px;
            font-weight: 700;
            margin-bottom: 24px;
        }

        .footer-links {
            list-style: none;
            display: flex;
            flex-direction: column;
            gap: 16px;
        }

        .footer-links a {
            color: rgba(255, 255, 255, 0.4);
            text-decoration: none;
            transition: color 0.3s ease;
        }

        .footer-links a:hover {
            color: #ff5722;
        }

        .footer-bottom {
            border-top: 1px solid rgba(255, 255, 255, 0.05);
            padding-top: 40px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .social-links {
            display: flex;
            gap: 20px;
        }

        .social-link {
            color: white;
            opacity: 0.4;
            transition: opacity 0.3s ease;
        }

        .social-link:hover {
            opacity: 1;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .final-cta-section {
                padding: 80px 20px;
            }

            .final-benefits {
                grid-template-columns: 1fr;
                gap: 32px;
            }

            .footer-container {
                grid-template-columns: 1fr;
                gap: 40px;
            }

            .footer-bottom {
                flex-direction: column-reverse;
                gap: 24px;
                text-align: center;
            }

            .social-links {
                justify-content: center;
            }
        }

        /* ROI Snapshot Section */
        .roi-snapshot-section {
            padding: 100px 20px;
            background: #fff;
            position: relative;
        }

        .roi-header {
            text-align: center;
            max-width: 800px;
            margin: 0 auto 60px;
        }

        .roi-title {
            font-size: 42px;
            font-weight: 900;
            color: #1a1a1a;
            margin-bottom: 20px;
        }

        .roi-subtitle {
            font-size: 18px;
            color: #666;
            line-height: 1.6;
        }

        .industry-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 30px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .industry-card {
            background: #f9fafb;
            border-radius: 24px;
            padding: 40px 30px;
            border: 1px solid rgba(0, 0, 0, 0.05);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .industry-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
            border-color: rgba(255, 87, 34, 0.2);
        }

        .industry-icon {
            width: 64px;
            height: 64px;
            background: white;
            border-radius: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            margin-bottom: 24px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.04);
            color: #FF5722;
        }

        .industry-name {
            font-size: 24px;
            font-weight: 800;
            color: #1a1a1a;
            margin-bottom: 24px;
        }

        .industry-stat {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-bottom: 16px;
            padding-bottom: 16px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .industry-stat:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }

        .stat-highlight {
            font-size: 28px;
            font-weight: 900;
            color: #FF5722;
        }

        .stat-desc {
            font-size: 14px;
            color: #666;
            font-weight: 600;
        }

        /* ROI Calculator Section */
        .calculator-section {
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
            padding: 100px 20px;
            color: white;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .calc-container {
            max-width: 1100px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
        }

        .calc-content h2 {
            font-size: 42px;
            font-weight: 900;
            margin-bottom: 24px;
            line-height: 1.2;
        }

        .calc-content p {
            font-size: 18px;
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 40px;
            line-height: 1.6;
        }

        .calculator-card {
            background: white;
            border-radius: 24px;
            padding: 40px;
            color: #1a1a1a;
            box-shadow: 0 24px 60px rgba(0, 0, 0, 0.2);
        }

        .input-group {
            margin-bottom: 32px;
        }

        .input-label {
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            font-weight: 700;
            text-transform: uppercase;
            color: #666;
            margin-bottom: 16px;
        }

        .input-value {
            color: #FF5722;
            font-weight: 800;
        }

        .range-slider {
            width: 100%;
            height: 6px;
            background: #eee;
            border-radius: 3px;
            outline: none;
            -webkit-appearance: none;
        }

        .range-slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            width: 24px;
            height: 24px;
            background: #FF5722;
            border-radius: 50%;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(255, 87, 34, 0.3);
            transition: transform 0.2s;
        }

        .range-slider::-webkit-slider-thumb:hover {
            transform: scale(1.1);
        }

        .calc-results {
            background: #fff5f2;
            border-radius: 16px;
            padding: 24px;
            margin-top: 40px;
            text-align: center;
        }

        .result-label {
            font-size: 14px;
            text-transform: uppercase;
            font-weight: 700;
            color: #666;
            margin-bottom: 8px;
            letter-spacing: 0.05em;
        }

        .result-value {
            font-size: 48px;
            font-weight: 900;
            color: #FF5722;
            line-height: 1;
        }

        .calc-note {
            font-size: 12px;
            color: #999;
            text-align: center;
            margin-top: 16px;
        }

        /* ROI Snapshot Section Enhanced */
        .roi-snapshot-section {
            padding: 100px 20px;
            background: #ffffff;
            font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .roi-snapshot-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .roi-snapshot-header {
            text-align: center;
            margin-bottom: 60px;
        }

        .roi-snapshot-header h2 {
            font-size: clamp(32px, 5vw, 48px);
            font-weight: 800;
            color: #1a1a1a;
            margin-bottom: 30px;
            letter-spacing: -0.02em;
        }

        .industry-tabs {
            display: flex;
            justify-content: center;
            gap: 12px;
            flex-wrap: wrap;
            margin-bottom: 60px;
        }

        .tab-btn {
            padding: 14px 28px;
            border-radius: 50px;
            border: none;
            background: #f5f7f9;
            color: #64748b;
            font-weight: 600;
            font-size: 15px;
            cursor: pointer;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .tab-btn:hover {
            background: #e2e8f0;
            color: #1e293b;
        }

        .tab-btn.active {
            background: #4361ee;
            color: white;
            box-shadow: 0 10px 20px rgba(67, 97, 238, 0.2);
        }

        .snapshot-content-wrapper {
            position: relative;
            min-height: 500px;
        }

        .snapshot-content {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.5s ease;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            pointer-events: none;
        }

        .snapshot-content.active {
            opacity: 1;
            transform: translateY(0);
            position: relative;
            pointer-events: all;
        }

        .snapshot-image-box {
            border-radius: 24px;
            overflow: hidden;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.1);
        }

        .snapshot-image-box img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            display: block;
        }

        .snapshot-info h3 {
            font-size: 28px;
            font-weight: 800;
            color: #1a1a1a;
            margin-bottom: 24px;
            line-height: 1.3;
        }

        .industry-tag-list {
            display: flex;
            gap: 10px;
            margin-bottom: 40px;
            flex-wrap: wrap;
        }

        .industry-tag {
            padding: 8px 16px;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 50px;
            font-size: 13px;
            font-weight: 600;
            color: #64748b;
        }

        .metric-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-bottom: 40px;
            padding-top: 30px;
            border-top: 1px solid #f1f5f9;
        }

        .metric-item {
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .metric-value {
            font-size: 36px;
            font-weight: 800;
            color: #22c55e;
            display: flex;
            align-items: center;
            gap: 8px;
        }

        .metric-value svg {
            width: 24px;
            height: 24px;
        }

        .metric-label {
            font-size: 14px;
            font-weight: 600;
            color: #64748b;
        }

        .action-card {
            background: white;
            border: 1px solid #f1f5f9;
            border-radius: 20px;
            padding: 24px;
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
            transition: transform 0.3s ease;
        }

        .action-card:hover {
            transform: translateX(10px);
        }

        .play-icon {
            width: 48px;
            height: 48px;
            background: #ef4444;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            flex-shrink: 0;
        }

        .action-text h4 {
            font-size: 16px;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 4px;
        }

        .action-text p {
            font-size: 14px;
            color: #64748b;
        }

        .snapshot-cta {
            background: #1a1a1a;
            color: white;
            padding: 18px 36px;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 700;
            width: 100%;
            border: none;
            cursor: pointer;
            transition: background 0.3s ease;
        }

        .snapshot-cta:hover {
            background: #333;
        }

        @media (max-width: 968px) {
            .snapshot-content {
                grid-template-columns: 1fr;
                gap: 40px;
            }

            .snapshot-image-box {
                order: 2;
            }

            .snapshot-info {
                order: 1;
            }
        }
    </style>
</head>

<body>
    <div class="hero-section">
        <div class="hero-container">
            <!-- Left Column - Desktop / All Content - Mobile -->
            <div class="content-column">
                <div class="premium-badge">
                    <span class="badge-dot"></span>
                    <div class="badge-text-wrapper">
                        <div class="badge-rotating-container">
                            <span class="badge-text badge-line-1">Proud to be Sponsoring Global AI Show</span>
                            <span class="badge-text badge-line-2">Abu Dhabi • December 2025</span>
                            <span class="badge-text badge-line-3">World's First AI Sales Workforce</span>
                        </div>
                    </div>
                </div>

                <h1 class="headline">
                    Deploy a Full AI Sales & Marketing Team That Books
                    <span class="headline-accent">300-500 Qualified Appointments</span>
                    Every Month — On Autopilot
                </h1>

                <p class="subheadline">
                    <strong>Never miss another lead.</strong> Your AI team calls within
                    <span class="subheadline-strong">3 minutes</span>, follows up
                    <span class="subheadline-strong">12+ times</span>, and books appointments
                    <span class="subheadline-strong">while you sleep</span> — all for 80% less than hiring SDRs.
                </p>

                <div class="trust-numbers">
                    <div class="trust-item">
                        <div class="trust-value">100k+</div>
                        <div class="trust-label">Leads Generated</div>
                    </div>
                    <div class="trust-item">
                        <div class="trust-value">20,000</div>
                        <div class="trust-label">Qualified Leads</div>
                    </div>
                    <div class="trust-item">
                        <div class="trust-value">9,000</div>
                        <div class="trust-label">Appointments</div>
                    </div>
                </div>

                <div class="cta-group">
                    <button class="btn-pill btn-primary">
                        Enterprise Demo
                        <span class="btn-dot"></span>
                    </button>
                    <button class="btn-pill btn-secondary">
                        Join Waitlist
                        <span class="btn-dot"></span>
                    </button>
                </div>

                <ul class="benefits-list">
                    <li class="benefit">
                        <span class="benefit-icon">✓</span>
                        Watch 3 real appointments get booked during your demo
                    </li>
                    <li class="benefit">
                        <span class="benefit-icon">✓</span>
                        Get your custom implementation plan in 48 hours
                    </li>
                    <li class="benefit">
                        <span class="benefit-icon">✓</span>
                        30-day money-back guarantee - zero risk
                    </li>
                </ul>
            </div>


        </div>
    </div>
    <section class="lead-problem-section">
        <div class="lead-container">
            <!-- Header -->
            <div class="lead-header">
                <span class="lead-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                    </svg>
                    The Sales System Problem
                </span>
                <h2 class="lead-title">
                    You're Still Bleeding Appointments
                    <br>While Competitors Run <span class="highlight">Automated Revenue Machines</span>
                </h2>
                <p class="lead-subtitle">
                    Think of your leads like milk from expensive cows — every second counts before it spoils.<br>
                    Here's exactly what's happening to your $100,000 ad spend:
                </p>
            </div>

            <!-- Visual Flow Comparison -->
            <div class="flow-visual">
                <h3 class="flow-title">The Brutal Math of Your Current System</h3>

                <!-- Math Comparison Cards -->
                <div class="math-comparison">
                    <div class="math-card current">
                        <div class="math-card-header">
                            <span class="math-label">YOUR CURRENT SYSTEM</span>
                        </div>
                        <div class="math-items">
                            <div class="math-item">
                                <span class="math-item-label">5 SDRs Salary</span>
                                <span class="math-item-value">$25,000/mo</span>
                            </div>
                            <div class="math-item">
                                <span class="math-item-label">Appointments Booked</span>
                                <span class="math-item-value">250/mo</span>
                            </div>
                            <div class="math-item">
                                <span class="math-item-label">Show Rate</span>
                                <span class="math-item-value">60%</span>
                            </div>
                            <div class="math-item">
                                <span class="math-item-label">Actual Shows</span>
                                <span class="math-item-value">150/mo</span>
                            </div>
                            <div class="math-item highlight">
                                <span class="math-item-label">Cost Per Show</span>
                                <span class="math-item-value big">$166</span>
                            </div>
                        </div>
                    </div>

                    <div class="vs-circle">
                        <span>VS</span>
                    </div>

                    <div class="math-card ai">
                        <div class="math-card-header">
                            <span class="math-label">AI SALES SYSTEM</span>
                        </div>
                        <div class="math-items">
                            <div class="math-item">
                                <span class="math-item-label">AI Team Cost</span>
                                <span class="math-item-value">$497/mo</span>
                            </div>
                            <div class="math-item">
                                <span class="math-item-label">Appointments Booked</span>
                                <span class="math-item-value">500+/mo</span>
                            </div>
                            <div class="math-item">
                                <span class="math-item-label">Show Rate</span>
                                <span class="math-item-value">87%</span>
                            </div>
                            <div class="math-item">
                                <span class="math-item-label">Actual Shows</span>
                                <span class="math-item-value">435/mo</span>
                            </div>
                            <div class="math-item highlight">
                                <span class="math-item-label">Cost Per Show</span>
                                <span class="math-item-value big">$1.14</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="math-punchline">
                    You're paying <span>145x more</span> per appointment. Let that sink in.
                </div>

                <!-- Timeline Visual -->
                <div class="timeline-section">
                    <h3 class="timeline-title">What Happens to Your Leads Right Now</h3>
                    <div class="timeline-grid">
                        <div class="timeline-item">
                            <div class="timeline-time">0 min</div>
                            <div class="timeline-event">Lead Submits Form</div>
                            <div class="timeline-result won">AI calls immediately</div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-time">3 min</div>
                            <div class="timeline-event">Peak Interest Window</div>
                            <div class="timeline-result lost">Your SDR hasn't seen it yet</div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-time">1 hour</div>
                            <div class="timeline-event">Lead Goes Cold</div>
                            <div class="timeline-result lost">21x less likely to convert</div>
                        </div>
                        <div class="timeline-item">
                            <div class="timeline-time">24 hours</div>
                            <div class="timeline-event">First Contact Attempt</div>
                            <div class="timeline-result lost">Already bought from competitor</div>
                        </div>
                    </div>
                </div>

                <!-- Failure Cards -->
                <div class="failure-cards-grid">
                    <div class="failure-card">
                        <div class="failure-icon-box">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                        </div>
                        <h3 class="failure-title">Speed to Lead Failure</h3>
                        <p class="failure-description">
                            MIT research: Contact within 5 minutes = 21x more likely to convert. Your average: 3+ hours.
                        </p>
                        <div class="failure-metric">78%</div>
                        <div class="failure-metric-label">NEVER CONTACTED</div>
                    </div>

                    <div class="failure-card">
                        <div class="failure-icon-box">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </div>
                        <h3 class="failure-title">Follow-Up Failure</h3>
                        <p class="failure-description">
                            80% of sales require 12+ touches. Your team averages 2 before giving up.
                        </p>
                        <div class="failure-metric">12x</div>
                        <div class="failure-metric-label">MORE TOUCHES NEEDED</div>
                    </div>

                    <div class="failure-card">
                        <div class="failure-icon-box">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="12" y1="1" x2="12" y2="23" />
                                <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                            </svg>
                        </div>
                        <h3 class="failure-title">Cost Per Appointment</h3>
                        <p class="failure-description">
                            You're paying $166 per show while AI delivers them for $1.14. That's 145x overpayment.
                        </p>
                        <div class="failure-metric">$166</div>
                        <div class="failure-metric-label">YOUR COST PER SHOW</div>
                    </div>
                </div>
            </div>

            <!-- Visual Funnel Diagram -->
            <div class="diagram-section">
                <h3 class="diagram-title">The Leaky Bucket vs The Automated Pipeline</h3>
                <div class="funnel-diagram">
                    <!-- Manual Funnel -->
                    <div class="funnel manual-funnel">
                        <div class="funnel-header">
                            <div class="funnel-name">Your Current System</div>
                            <div class="funnel-type">Manual Lead Processing</div>
                        </div>
                        <div class="funnel-visual">
                            <div class="funnel-stage stage-1">
                                <div class="stage-bar">1000 Leads</div>
                                <div class="stage-label">$50K spent</div>
                            </div>
                            <div class="funnel-stage stage-2">
                                <div class="stage-bar">350 Contacted</div>
                                <div class="stage-label">3+ hours delay</div>
                            </div>
                            <div class="funnel-stage stage-3">
                                <div class="stage-bar">200 Qualified</div>
                                <div class="stage-label">2 follow-ups only</div>
                            </div>
                            <div class="funnel-stage stage-4">
                                <div class="stage-bar">100 Booked</div>
                            </div>
                            <div class="funnel-stage stage-5">
                                <div class="stage-bar">60 Shows</div>
                            </div>
                        </div>
                    </div>

                    <!-- AI Funnel -->
                    <div class="funnel ai-funnel">
                        <div class="funnel-header">
                            <div class="funnel-name">AI Sales Team System</div>
                            <div class="funnel-type">Automated Lead-to-Appointment Engine</div>
                        </div>
                        <div class="funnel-visual">
                            <div class="funnel-stage stage-1">
                                <div class="stage-bar">3000 Leads</div>
                                <div class="stage-label">$50K spent</div>
                                <div class="ai-badge-float">AI Influencer Ads</div>
                            </div>
                            <div class="funnel-stage stage-2">
                                <div class="stage-bar">2850 Contacted</div>
                                <div class="stage-label">3 minutes</div>
                            </div>
                            <div class="funnel-stage stage-3">
                                <div class="stage-bar">600 Qualified</div>
                                <div class="stage-label">12+ touches</div>
                            </div>
                            <div class="funnel-stage stage-4">
                                <div class="stage-bar">300 Booked</div>
                                <div class="stage-label">Automated</div>
                            </div>
                            <div class="funnel-stage stage-5">
                                <div class="stage-bar">261 Shows</div>
                                <div class="stage-label">87% attend</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- CTA -->
            <div class="lead-cta">
                <div class="lead-cta-content">
                    <h3 class="lead-cta-title">Stop the Leak. Start the Flow.</h3>
                    <p class="lead-cta-text">
                        You're paying <strong>4.3x more</strong> per appointment. Plus missing <strong>3x the
                            leads</strong>.<br>
                        Let's fix that in 48 hours.
                    </p>
                    <a href="#demo" class="lead-cta-button">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                            stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span>Book Your Free Demo</span>
                    </a>
                    <p style="margin-top: 22px; color: #666; font-size: 16px; font-weight: 500;">
                        ✓ See 3 leads turn into appointments live &nbsp;&nbsp;|&nbsp;&nbsp; ✓ Get your custom ROI
                        calculation
                    </p>
                </div>
            </div>
        </div>
    </section>
    <section class="workforce-main-section">
        <div class="workforce-container">
            <div class="workforce-header">
                <span class="workforce-badge">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 16v-4M12 8h.01" />
                    </svg>
                    The New Standard
                </span>
                <h2 class="workforce-title">Your 24/7 AI Sales Workforce</h2>
                <p class="workforce-subtitle">Replace the chaos of human teams with the precision of AI. One integrated
                    system handling every stage of your pipeline.</p>
            </div>

            <div class="workforce-roles-grid">
                <!-- Role 1: Influencer (Ads) -->
                <div class="workforce-glass-card">
                    <div class="workforce-role-header">
                        <div class="workforce-icon-box">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
                                <path d="M12 6v6l4 2" />
                            </svg>
                        </div>
                        <div class="workforce-role-info">
                            <h3>AI Social Media Influencer</h3>
                            <div class="workforce-role-salary">Replaces: Ad Agency ($5k/mo)</div>
                        </div>
                    </div>
                    <div class="workforce-role-content">
                        <div class="workforce-features">
                            <div class="workforce-feature-item">
                                <span class="workforce-check">✓</span>
                                <div>Creates & posts viral content daily</div>
                            </div>
                            <div class="workforce-feature-item">
                                <span class="workforce-check">✓</span>
                                <div>Manages paid ad campaigns 24/7</div>
                            </div>
                            <div class="workforce-feature-item">
                                <span class="workforce-check">✓</span>
                                <div>Generates high-intent inbound leads</div>
                            </div>
                        </div>
                        <div class="workforce-card-stats">
                            <div class="workforce-stat-box">
                                <span class="workforce-stat-value">10k+</span>
                                <span class="workforce-stat-label">Views/Day</span>
                            </div>
                            <div class="workforce-stat-box">
                                <span class="workforce-stat-value">3.5%</span>
                                <span class="workforce-stat-label">CTR</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Role 2: Sales Rep -->
                <div class="workforce-glass-card">
                    <div class="workforce-role-header">
                        <div class="workforce-icon-box">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <path
                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                            </svg>
                        </div>
                        <div class="workforce-role-info">
                            <h3>AI Sales Representative</h3>
                            <div class="workforce-role-salary">Replaces: 3 SDRs ($15k/mo)</div>
                        </div>
                    </div>
                    <div class="workforce-role-content">
                        <div class="workforce-features">
                            <div class="workforce-feature-item">
                                <span class="workforce-check">✓</span>
                                <div>Calls leads within 3 minutes</div>
                            </div>
                            <div class="workforce-feature-item">
                                <span class="workforce-check">✓</span>
                                <div>Qualifies prospects via SMS/Call</div>
                            </div>
                            <div class="workforce-feature-item">
                                <span class="workforce-check">✓</span>
                                <div>Books appointments on your calendar</div>
                            </div>
                        </div>
                        <div class="workforce-card-stats">
                            <div class="workforce-stat-box">
                                <span class="workforce-stat-value">24/7</span>
                                <span class="workforce-stat-label">Availability</span>
                            </div>
                            <div class="workforce-stat-box">
                                <span class="workforce-stat-value">5m</span>
                                <span class="workforce-stat-label">Response Time</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Role 3: Receptionist -->
                <div class="workforce-glass-card">
                    <div class="workforce-role-header">
                        <div class="workforce-icon-box">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                        </div>
                        <div class="workforce-role-info">
                            <h3>AI Receptionist</h3>
                            <div class="workforce-role-salary">Replaces: Front Desk ($4k/mo)</div>
                        </div>
                    </div>
                    <div class="workforce-role-content">
                        <div class="workforce-features">
                            <div class="workforce-feature-item">
                                <span class="workforce-check">✓</span>
                                <div>Answers inbound calls instantly</div>
                            </div>
                            <div class="workforce-feature-item">
                                <span class="workforce-check">✓</span>
                                <div>Routes calls to appropriate staff</div>
                            </div>
                            <div class="workforce-feature-item">
                                <span class="workforce-check">✓</span>
                                <div>Handles scheduling & inquiries</div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Role 4: Customer Service -->
                <div class="workforce-glass-card">
                    <div class="workforce-role-header">
                        <div class="workforce-icon-box">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2">
                                <path
                                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                            </svg>
                        </div>
                        <div class="workforce-role-info">
                            <h3>AI Customer Service</h3>
                            <div class="workforce-role-salary">Replaces: Support Rep ($4k/mo)</div>
                        </div>
                    </div>
                    <div class="workforce-role-content">
                        <div class="workforce-features">
                            <div class="workforce-feature-item">
                                <span class="workforce-check">✓</span>
                                <div>Resolves common issues instantly</div>
                            </div>
                            <div class="workforce-feature-item">
                                <span class="workforce-check">✓</span>
                                <div>Available across Chat, SMS, Email</div>
                            </div>
                            <div class="workforce-feature-item">
                                <span class="workforce-check">✓</span>
                                <div>Escalates complex issues to humans</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="workforce-cta-section">
                <a href="https://myteam.ravan.ai/book" class="workforce-cta-btn">BOOK A DEMO CALL</a>
            </div>
        </div>
    </section>
    <!-- ROI Snapshot Section -->
    <section class="roi-snapshot-section">
        <div class="roi-snapshot-container">
            <div class="roi-snapshot-header">
                <h2>ROI Snapshot by Industry</h2>
                <div class="industry-tabs">
                    <button class="tab-btn active" onclick="switchIndustry('global')">Global Stats</button>
                    <button class="tab-btn" onclick="switchIndustry('real-estate')">Real Estate</button>
                    <button class="tab-btn" onclick="switchIndustry('gaming')">Gaming & Casinos</button>
                    <button class="tab-btn" onclick="switchIndustry('healthcare')">Healthcare</button>
                    <button class="tab-btn" onclick="switchIndustry('finance')">Lending & Finance</button>
                    <button class="tab-btn" onclick="switchIndustry('logistics')">Transportation & Logistics</button>
                </div>
            </div>

            <div class="snapshot-content-wrapper">
                <!-- Global Stats (API Style) -->
                <div id="global" class="snapshot-content active">
                    <div class="snapshot-image-box">
                        <img src="https://loremflickr.com/800/600/dashboard,analytics,data" alt="Global ROI Snapshot">
                    </div>
                    <div class="snapshot-info">
                        <h3>Real-Time Infrastructure Performance</h3>
                        <div class="industry-tag-list">
                            <span class="industry-tag">Global API Hub</span>
                            <span class="industry-tag">Multi-Channel Sync</span>
                            <span class="industry-tag">Live Analytics</span>
                        </div>
                        <div class="metric-row">
                            <div class="metric-item">
                                <span class="metric-value">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                        <path d="M12 19V5M5 12l7-7 7 7" />
                                    </svg>
                                    1.2M+
                                </span>
                                <span class="metric-label">API Calls/Mo</span>
                            </div>
                            <div class="metric-item">
                                <span class="metric-value">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                        <path d="M12 19V5M5 12l7-7 7 7" />
                                    </svg>
                                    99.9%
                                </span>
                                <span class="metric-label">Uptime Reliability</span>
                            </div>
                        </div>
                        <div class="action-card">
                            <div class="play-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <div class="action-text">
                                <h4>System Deep Dive</h4>
                                <p>03:12 • Infrastructure Overview</p>
                            </div>
                        </div>
                        <button class="snapshot-cta">Explore the Platform</button>
                    </div>
                </div>

                <!-- Real Estate -->
                <div id="real-estate" class="snapshot-content">
                    <div class="snapshot-image-box">
                        <img src="https://loremflickr.com/800/600/dashboard,realestate,data" alt="Real Estate Industry">
                    </div>
                    <div class="snapshot-info">
                        <h3>Your Always-On Property Concierge</h3>
                        <div class="industry-tag-list">
                            <span class="industry-tag">Qualified Leads</span>
                            <span class="industry-tag">FAQ on Listings</span>
                            <span class="industry-tag">Event Confirmation</span>
                        </div>
                        <div class="metric-row">
                            <div class="metric-item">
                                <span class="metric-value">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                        <path d="M12 19V5M5 12l7-7 7 7" />
                                    </svg>
                                    400%
                                </span>
                                <span class="metric-label">in CVR</span>
                            </div>
                            <div class="metric-item">
                                <span class="metric-value">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                        <path d="M12 19V5M5 12l7-7 7 7" />
                                    </svg>
                                    25–35%
                                </span>
                                <span class="metric-label">in show-up rate</span>
                            </div>
                        </div>
                        <div class="action-card">
                            <div class="play-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <div class="action-text">
                                <h4>Hear It In Action</h4>
                                <p>01:53 • Real Estate AI Rep</p>
                            </div>
                        </div>
                        <button class="snapshot-cta">Book a Meeting</button>
                    </div>
                </div>

                <!-- Gaming -->
                <div id="gaming" class="snapshot-content">
                    <div class="snapshot-image-box">
                        <img src="https://loremflickr.com/800/600/dashboard,casino,poker" alt="Gaming & Casinos">
                    </div>
                    <div class="snapshot-info">
                        <h3>High-Stakes Player Engagement</h3>
                        <div class="industry-tag-list">
                            <span class="industry-tag">VIP Concierge</span>
                            <span class="industry-tag">Retention SMS</span>
                            <span class="industry-tag">Prizing Notifications</span>
                        </div>
                        <div class="metric-row">
                            <div class="metric-item">
                                <span class="metric-value">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                        <path d="M12 19V5M5 12l7-7 7 7" />
                                    </svg>
                                    3.2x
                                </span>
                                <span class="metric-label">LTV increase</span>
                            </div>
                            <div class="metric-item">
                                <span class="metric-value">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                        <path d="M12 19V5M5 12l7-7 7 7" />
                                    </svg>
                                    55%
                                </span>
                                <span class="metric-label">in reactivation rate</span>
                            </div>
                        </div>
                        <div class="action-card">
                            <div class="play-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <div class="action-text">
                                <h4>Hear It In Action</h4>
                                <p>02:15 • Casino VIP Rep</p>
                            </div>
                        </div>
                        <button class="snapshot-cta">Book a Meeting</button>
                    </div>
                </div>

                <!-- Healthcare -->
                <div id="healthcare" class="snapshot-content">
                    <div class="snapshot-image-box">
                        <img src="https://loremflickr.com/800/600/dashboard,medical,clinic" alt="Healthcare Industry">
                    </div>
                    <div class="snapshot-info">
                        <h3>Patient Care Coordination</h3>
                        <div class="industry-tag-list">
                            <span class="industry-tag">Pre-Qualification</span>
                            <span class="industry-tag">Appointment Reminders</span>
                            <span class="industry-tag">Post-Op Follow-up</span>
                        </div>
                        <div class="metric-row">
                            <div class="metric-item">
                                <span class="metric-value">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                        <path d="M12 19V5M5 12l7-7 7 7" />
                                    </svg>
                                    92%
                                </span>
                                <span class="metric-label">show-up rate</span>
                            </div>
                            <div class="metric-item">
                                <span class="metric-value">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                        <path d="M12 19V5M5 12l7-7 7 7" />
                                    </svg>
                                    60%
                                </span>
                                <span class="metric-label">reduction in no-shows</span>
                            </div>
                        </div>
                        <div class="action-card">
                            <div class="play-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <div class="action-text">
                                <h4>Hear It In Action</h4>
                                <p>01:42 • Clinic AI Assistant</p>
                            </div>
                        </div>
                        <button class="snapshot-cta">Book a Meeting</button>
                    </div>
                </div>

                <!-- Finance -->
                <div id="finance" class="snapshot-content">
                    <div class="snapshot-image-box">
                        <img src="https://loremflickr.com/800/600/dashboard,finance,bank" alt="Lending & Finance">
                    </div>
                    <div class="snapshot-info">
                        <h3>Lending & Finance Velocity</h3>
                        <div class="industry-tag-list">
                            <span class="industry-tag">Credit Pre-Check</span>
                            <span class="industry-tag">Doc Collection</span>
                            <span class="industry-tag">Rate Inquiries</span>
                        </div>
                        <div class="metric-row">
                            <div class="metric-item">
                                <span class="metric-value">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                        <path d="M12 19V5M5 12l7-7 7 7" />
                                    </svg>
                                    3x
                                </span>
                                <span class="metric-label">Faster Underwriting</span>
                            </div>
                            <div class="metric-item">
                                <span class="metric-value">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                        <path d="M12 19V5M5 12l7-7 7 7" />
                                    </svg>
                                    $45k
                                </span>
                                <span class="metric-label">saved in ops cost</span>
                            </div>
                        </div>
                        <div class="action-card">
                            <div class="play-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <div class="action-text">
                                <h4>Hear It In Action</h4>
                                <p>02:30 • Finance AI Broker</p>
                            </div>
                        </div>
                        <button class="snapshot-cta">Book a Meeting</button>
                    </div>
                </div>

                <!-- Logistics -->
                <div id="logistics" class="snapshot-content">
                    <div class="snapshot-image-box">
                        <img src="https://loremflickr.com/800/600/dashboard,logistics,truck"
                            alt="Transportation & Logistics">
                    </div>
                    <div class="snapshot-info">
                        <h3>Global Logistics Efficiency</h3>
                        <div class="industry-tag-list">
                            <span class="industry-tag">Fleet Updates</span>
                            <span class="industry-tag">Route Inquiries</span>
                            <span class="industry-tag">Delivery Alerts</span>
                        </div>
                        <div class="metric-row">
                            <div class="metric-item">
                                <span class="metric-value">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                        <path d="M12 19V5M5 12l7-7 7 7" />
                                    </svg>
                                    24/7
                                </span>
                                <span class="metric-label">Fleet Coverage</span>
                            </div>
                            <div class="metric-item">
                                <span class="metric-value">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                        <path d="M12 19V5M5 12l7-7 7 7" />
                                    </svg>
                                    48%
                                </span>
                                <span class="metric-label">reduction in dispatch errors</span>
                            </div>
                        </div>
                        <div class="action-card">
                            <div class="play-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                            <div class="action-text">
                                <h4>Hear It In Action</h4>
                                <p>01:58 • Logistics Dispatch AI</p>
                            </div>
                        </div>
                        <button class="snapshot-cta">Book a Meeting</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- ROI Calculator Section -->
    <section class="calculator-section">
        <div class="calc-container">
            <div class="calc-content">
                <h2>Calculate Your Potential Revenue Uplift</h2>
                <p>See exactly how much revenue you're missing out on by relying on human-only sales teams. Our AI
                    increases contact rates and follow-ups, leading to more closed deals.</p>
            </div>

            <div class="calculator-card">
                <div class="input-group">
                    <div class="input-label">
                        <span>Monthly Leads</span>
                        <span class="input-value" id="val-leads">1000</span>
                    </div>
                    <input type="range" min="100" max="10000" step="100" value="1000" class="range-slider"
                        id="input-leads">
                </div>

                <div class="input-group">
                    <div class="input-label">
                        <span>Average Deal Value</span>
                        <span class="input-value">$<span id="val-deal">2000</span></span>
                    </div>
                    <input type="range" min="500" max="50000" step="500" value="2000" class="range-slider"
                        id="input-deal">
                </div>

                <div class="input-group">
                    <div class="input-label">
                        <span>Current Close Rate</span>
                        <span class="input-value"><span id="val-rate">5</span>%</span>
                    </div>
                    <input type="range" min="1" max="20" step="0.5" value="5" class="range-slider" id="input-rate">
                </div>

                <div class="calc-results">
                    <div class="result-label">Projected Additional Revenue (Month)</div>
                    <div class="result-value" id="result-revenue">$0</div>
                    <div class="calc-note">*Based on conservative 30% increase in conversion with AI</div>
                </div>
            </div>
        </div>
    </section>

    <section class="proof-main-section">
        <div class="proof-container">
            <div class="proof-header">
                <span class="proof-badge">Case Study</span>
                <h2 class="proof-title">Real Results, Real Revenue.</h2>
                <p class="proof-subtitle">See how top companies are scaling with Ravan.ai</p>
            </div>

            <div class="proof-case-study">
                <div class="proof-case-header">
                    <div class="company-logo">LOGO</div>
                    <div>
                        <h2 class="proof-case-title">How Danube Properties Generated $5 Million+ in Sales in 30 Days
                        </h2>
                    </div>
                </div>

                <div class="proof-metrics-grid">
                    <div class="proof-metric-card">
                        <span class="proof-metric-value">$5.2M</span>
                        <span class="proof-metric-label">Revenue Generated</span>
                    </div>
                    <div class="proof-metric-card">
                        <span class="proof-metric-value">1,240</span>
                        <span class="proof-metric-label">Qualified Leads</span>
                    </div>
                    <div class="proof-metric-card">
                        <span class="proof-metric-value">480</span>
                        <span class="proof-metric-label">Appointments Booked</span>
                    </div>
                </div>

                <div class="proof-content-grid">
                    <div class="proof-section">
                        <h3>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff5722"
                                stroke-width="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                            The Challenge
                        </h3>
                        <p>Danube was drowning in leads but converting poorly. Their sales team couldn't follow up fast
                            enough, resulting in wasted ad spend and lost opportunities.</p>

                        <h3>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00c853"
                                stroke-width="2">
                                <path d="M20 6L9 17l-5-5" />
                            </svg>
                            The Solution
                        </h3>
                        <p>They deployed Ravan.ai's AI Sales Rep to handle initial outreach and qualification.</p>
                        <ul class="proof-list">
                            <li>Instant lead response (under 2 mins)</li>
                            <li>24/7 qualification of prospects</li>
                            <li>Automated booking directly to sales calendars</li>
                        </ul>
                    </div>

                    <div class="proof-testimonial">
                        <div class="testimonial-text">
                            "We were skeptical at first, but the results are undeniable. Ravan.ai didn't just replace
                            our SDRs, it outperformed them by a factor of 10. Our sales team now only talks to qualified
                            leads."
                        </div>
                        <div class="testimonial-author">
                            <div class="author-avatar"></div>
                            <div class="author-info">
                                <h4>Sarah J.</h4>
                                <p>VP of Sales, Danube Properties</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="proof-cta-wrapper">
                    <a href="https://myteam.ravan.ai/book" class="proof-cta-btn">Get Results Like Danube</a>
                </div>
            </div>

            <div class="trusted-section">
                <div class="trusted-label">Trusted By Industry Leaders</div>
                <div class="logos-grid">
                    <div class="logo-item">DANUBE</div>
                    <div class="logo-item">EMAAR</div>
                    <div class="logo-item">DAMAC</div>
                    <div class="logo-item">SOBHA</div>
                    <div class="logo-item">NAKHEEL</div>
                </div>
            </div>
        </div>
    </section>
    <div class="faq-main-section">
        <div class="faq-container">
            <div class="faq-header">
                <span class="faq-badge">Everything You Need to Know</span>
                <h2 class="faq-title">Frequently Asked Questions</h2>
                <p class="faq-subtitle">Common questions about deploying your AI workforce.</p>
            </div>

            <div class="faq-grid">
                <!-- FAQ 1 -->
                <div class="faq-item">
                    <button class="faq-question">
                        How does the AI compare to a human SDR?
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            <p>Our AI outperforms human SDRs in speed, consistency, and cost. While a human takes 3+
                                hours to respond and gives up after 2 calls, our AI calls within 3 minutes and follows
                                up 12+ times.</p>
                            <p>Plus, it never sleeps, takes breaks, or has "bad days." It follows your script perfectly
                                every single time.</p>
                        </div>
                    </div>
                </div>

                <!-- FAQ 2 -->
                <div class="faq-item">
                    <button class="faq-question">
                        Is it difficult to set up?
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            <p>Not at all. We handle the entire implementation for you. We typically have clients live
                                within 48 hours.</p>
                            <ul class="faq-list">
                                <li>We clone your voice (optional)</li>
                                <li>We upload your scripts and knowledge base</li>
                                <li>We connect it to your CRM and calendar</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- FAQ 3 -->
                <div class="faq-item">
                    <button class="faq-question">
                        Does it integrate with my CRM?
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            <p>Yes, we integrate natively with HighLevel (GHL), Salesforce, HubSpot, and 3,000+ other
                                apps via Zapier.</p>
                        </div>
                    </div>
                </div>

                <!-- FAQ 4 -->
                <div class="faq-item">
                    <button class="faq-question">
                        What if I don't like the results?
                        <span class="faq-icon">+</span>
                    </button>
                    <div class="faq-answer">
                        <div class="faq-answer-content">
                            <p>We offer a 30-day money-back guarantee. We are so confident in our system that if you
                                don't see value, we don't want your money.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="faq-cta-section">
                <div class="faq-cta-text">Still have questions?</div>
                <a href="https://myteam.ravan.ai/book" class="faq-cta-button">Book a Free Demo Call</a>
            </div>
        </div>
    </div>
    <section class="final-cta-section">
        <div class="final-cta-content">
            <div class="final-cta-badge">Limited Availability</div>
            <h2 class="final-cta-title">
                Stop Losing Leads.<br>
                <span>Start Printing Revenue.</span>
            </h2>
            <p class="final-cta-subtitle">
                Join the top 1% of businesses using AI to dominate their market.<br>
                Your new sales team is ready to start tomorrow.
            </p>
            <div class="final-cta-buttons">
                <a href="https://myteam.ravan.ai/book" class="final-primary-btn">Book Your Free Demo Now</a>
                <a href="https://myteam.ravan.ai/book" class="final-secondary-btn">View Live ROI Calculator</a>
            </div>

            <div class="final-benefits">
                <div class="final-benefit-item">
                    <span class="final-benefit-value">48h</span>
                    <span class="final-benefit-label">Setup Time</span>
                </div>
                <div class="final-benefit-item">
                    <span class="final-benefit-value">100%</span>
                    <span class="final-benefit-label">Automated</span>
                </div>
                <div class="final-benefit-item">
                    <span class="final-benefit-value">30d</span>
                    <span class="final-benefit-label">Guarantee</span>
                </div>
            </div>
        </div>
    </section>

    <footer class="footer-section">
        <div class="footer-container">
            <div class="footer-col footer-brand">
                <a href="#" class="footer-logo">Ravan.ai</a>
                <p class="footer-desc">
                    The world's first fully autonomous AI workforce for sales and marketing teams.
                </p>
            </div>
            <div class="footer-col">
                <h4>Product</h4>
                <ul class="footer-links">
                    <li><a href="#">AI Sales Rep</a></li>
                    <li><a href="#">AI Receptionist</a></li>
                    <li><a href="#">AI Influencer</a></li>
                    <li><a href="#">Pricing</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Company</h4>
                <ul class="footer-links">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Case Studies</a></li>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Legal</h4>
                <ul class="footer-links">
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                </ul>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="footer-copyright">
                © 2024 Ravan AI Inc. All rights reserved.
            </div>
            <div class="social-links">
                <a href="#" class="social-link">Twitter</a>
                <a href="#" class="social-link">LinkedIn</a>
                <a href="#" class="social-link">Instagram</a>
            </div>
        </div>
    </footer>
    <script>
        function switchIndustry(industryId) {
            const tabs = document.querySelectorAll('.tab-btn');
            tabs.forEach(tab => {
                const onclick = tab.getAttribute('onclick');
                if (onclick && onclick.includes(industryId)) {
                    tab.classList.add('active');
                } else {
                    tab.classList.remove('active');
                }
            });

            const contents = document.querySelectorAll('.snapshot-content');
            contents.forEach(content => content.classList.remove('active'));

            const target = document.getElementById(industryId);
            if (target) target.classList.add('active');
        }
    </script>
    <script>
        document.querySelectorAll('.faq-question').forEach(button => {
            button.addEventListener('click', () => {
                const faqItem = button.parentElement;
                const isActive = faqItem.classList.contains('active');

                // Close all other items
                document.querySelectorAll('.faq-item').forEach(item => {
                    item.classList.remove('active');
                    item.querySelector('.faq-answer').style.maxHeight = null;
                });

                if (!isActive) {
                    faqItem.classList.add('active');
                    const answer = faqItem.querySelector('.faq-answer');
                    answer.style.maxHeight = answer.scrollHeight + "px";
                }
            });
        });
    </script>
    <script>
        // ROI Calculator Logic
        const leadsInput = document.getElementById('input-leads');
        const dealInput = document.getElementById('input-deal');
        const rateInput = document.getElementById('input-rate');

        const valLeads = document.getElementById('val-leads');
        const valDeal = document.getElementById('val-deal');
        const valRate = document.getElementById('val-rate');
        const resultRevenue = document.getElementById('result-revenue');

        function formatMoney(number) {
            return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(number);
        }

        function calculateROI() {
            const leads = parseInt(leadsInput.value);
            const deal = parseInt(dealInput.value);
            const rate = parseFloat(rateInput.value);

            // Update display values
            valLeads.innerText = leads.toLocaleString();
            valDeal.innerText = deal.toLocaleString();
            valRate.innerText = rate;

            // Logic: 
            // Current Revenue = Leads * (Rate/100) * Deal
            // AI Revenue (Assumption: 30% uplift in conversion) = Leads * (Rate * 1.3 / 100) * Deal
            // Difference = AI Revenue - Current Revenue

            // Simplified: Difference = Current Revenue * 0.3
            const currentRevenue = leads * (rate / 100) * deal;
            const additionalRevenue = currentRevenue * 0.30;

            resultRevenue.innerText = formatMoney(additionalRevenue);
        }

        if (leadsInput && dealInput && rateInput) {
            leadsInput.addEventListener('input', calculateROI);
            dealInput.addEventListener('input', calculateROI);
            rateInput.addEventListener('input', calculateROI);

            // Initial calculation
            calculateROI();
        }
    </script>
</body>

</html>



