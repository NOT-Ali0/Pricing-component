<script>
        let isAnnual = false;

        const plans = [
                {
                        name: 'Basic',
                        description: 'Perfect for getting started',
                        monthlyPrice: 9,
                        annualPrice: 7,
                        features: [
                                'Up to 5 projects',
                                'Basic analytics',
                                '24/7 support',
                                '1GB storage',
                                'Email notifications'
                        ],
                        highlighted: false,
                        cta: 'Get Started'
                },
                {
                        name: 'Pro',
                        description: 'Best for growing teams',
                        monthlyPrice: 29,
                        annualPrice: 24,
                        features: [
                                'Unlimited projects',
                                'Advanced analytics',
                                'Priority support',
                                '25GB storage',
                                'Custom integrations',
                                'Team collaboration',
                                'API access'
                        ],
                        highlighted: true,
                        cta: 'Start Free Trial'
                },
                {
                        name: 'Enterprise',
                        description: 'For large organizations',
                        monthlyPrice: 99,
                        annualPrice: 79,
                        features: [
                                'Everything in Pro',
                                'Unlimited storage',
                                'Dedicated account manager',
                                'Custom contracts',
                                'SSO & SAML',
                                'Advanced security',
                                'SLA guarantee',
                                'On-premise option'
                        ],
                        highlighted: false,
                        cta: 'Contact Sales'
                }
        ];

        function getPrice(plan) {
                return isAnnual ? plan.annualPrice : plan.monthlyPrice;
        }

        function getSavings(plan) {
                const monthlyCost = plan.monthlyPrice * 12;
                const annualCost = plan.annualPrice * 12;
                return monthlyCost - annualCost;
        }

        function toggleBilling() {
                isAnnual = !isAnnual;
        }
</script>

<svelte:head>
        <title>Pricing - Choose Your Plan</title>
</svelte:head>

<div class="page-wrapper">
        <div class="gradient-bg">
                <div class="gradient-orb orb-1"></div>
                <div class="gradient-orb orb-2"></div>
                <div class="gradient-orb orb-3"></div>
        </div>

        <main class="container">
                <header class="header">
                        <span class="badge">Pricing</span>
                        <h1>Choose the perfect plan for your needs</h1>
                        <p class="subtitle">Start free, upgrade when you're ready. No hidden fees, cancel anytime.</p>
                </header>

                <div class="toggle-wrapper">
                        <span class:active={!isAnnual}>Monthly</span>
                        <button 
                                class="toggle" 
                                on:click={toggleBilling}
                                aria-label="Toggle billing period"
                        >
                                <span class="toggle-slider" class:annual={isAnnual}></span>
                        </button>
                        <span class:active={isAnnual}>
                                Annual
                                <span class="save-badge">Save 20%</span>
                        </span>
                </div>

                <div class="pricing-grid">
                        {#each plans as plan}
                                <div class="pricing-card" class:highlighted={plan.highlighted}>
                                        {#if plan.highlighted}
                                                <div class="popular-badge">Most Popular</div>
                                        {/if}
                                        
                                        <div class="card-header">
                                                <h2>{plan.name}</h2>
                                                <p class="plan-description">{plan.description}</p>
                                        </div>

                                        <div class="price-section">
                                                <div class="price">
                                                        <span class="currency">$</span>
                                                        <span class="amount">{getPrice(plan)}</span>
                                                        <span class="period">/month</span>
                                                </div>
                                                {#if isAnnual}
                                                        <p class="annual-savings">Save ${getSavings(plan)} per year</p>
                                                {:else}
                                                        <p class="annual-savings">Billed monthly</p>
                                                {/if}
                                        </div>

                                        <ul class="features-list">
                                                {#each plan.features as feature}
                                                        <li>
                                                                <svg class="check-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                                                                        <polyline points="20 6 9 17 4 12"></polyline>
                                                                </svg>
                                                                {feature}
                                                        </li>
                                                {/each}
                                        </ul>

                                        <button class="cta-button" class:primary={plan.highlighted}>
                                                {plan.cta}
                                        </button>
                                </div>
                        {/each}
                </div>

                <footer class="footer">
                        <p>All plans include a 14-day free trial. No credit card required.</p>
                        <div class="trust-badges">
                                <div class="trust-item">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                        </svg>
                                        <span>SSL Secured</span>
                                </div>
                                <div class="trust-item">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                                                <path d="M7 11V7a5 5 0 0110 0v4"></path>
                                        </svg>
                                        <span>Data Protected</span>
                                </div>
                                <div class="trust-item">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <circle cx="12" cy="12" r="10"></circle>
                                                <polyline points="12 6 12 12 16 14"></polyline>
                                        </svg>
                                        <span>24/7 Support</span>
                                </div>
                        </div>
                </footer>
        </main>
</div>

<style>
        :global(*) {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
        }

        :global(body) {
                font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                background: #0a0a0f;
                color: #ffffff;
                height: 100vh;
                overflow: hidden;
        }

        .page-wrapper {
                position: relative;
                height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 20px;
        }

        .gradient-bg {
                position: fixed;
                inset: 0;
                overflow: hidden;
                z-index: 0;
        }

        .gradient-orb {
                position: absolute;
                border-radius: 50%;
                filter: blur(100px);
                opacity: 0.6;
                animation: float 20s ease-in-out infinite;
        }

        .orb-1 {
                width: 600px;
                height: 600px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                top: -200px;
                left: -100px;
                animation-delay: 0s;
        }

        .orb-2 {
                width: 500px;
                height: 500px;
                background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
                bottom: -150px;
                right: -100px;
                animation-delay: -7s;
        }

        .orb-3 {
                width: 400px;
                height: 400px;
                background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                animation-delay: -14s;
        }

        @keyframes float {
                0%, 100% {
                        transform: translate(0, 0) scale(1);
                }
                33% {
                        transform: translate(30px, -30px) scale(1.05);
                }
                66% {
                        transform: translate(-20px, 20px) scale(0.95);
                }
        }

        .container {
                position: relative;
                z-index: 1;
                max-width: 1200px;
                margin: 0 auto;
        }

        .header {
                text-align: center;
                margin-bottom: 20px;
        }

        .badge {
                display: inline-block;
                padding: 5px 12px;
                background: rgba(102, 126, 234, 0.2);
                border: 1px solid rgba(102, 126, 234, 0.3);
                border-radius: 50px;
                font-size: 0.7rem;
                font-weight: 500;
                color: #a5b4fc;
                text-transform: uppercase;
                letter-spacing: 1px;
                margin-bottom: 10px;
        }

        h1 {
                font-size: clamp(1.5rem, 3vw, 2rem);
                font-weight: 800;
                line-height: 1.2;
                margin-bottom: 8px;
                background: linear-gradient(135deg, #ffffff 0%, #a5b4fc 50%, #f5576c 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
        }

        .subtitle {
                font-size: 0.9rem;
                color: rgba(255, 255, 255, 0.6);
                max-width: 500px;
                margin: 0 auto;
                line-height: 1.4;
        }

        .toggle-wrapper {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 12px;
                margin-bottom: 20px;
                font-size: 0.85rem;
                color: rgba(255, 255, 255, 0.5);
        }

        .toggle-wrapper span.active {
                color: #ffffff;
                font-weight: 500;
        }

        .toggle {
                position: relative;
                width: 50px;
                height: 26px;
                background: rgba(255, 255, 255, 0.1);
                border: 1px solid rgba(255, 255, 255, 0.2);
                border-radius: 50px;
                cursor: pointer;
                transition: all 0.3s ease;
        }

        .toggle:hover {
                background: rgba(255, 255, 255, 0.15);
        }

        .toggle-slider {
                position: absolute;
                top: 2px;
                left: 2px;
                width: 20px;
                height: 20px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 50%;
                transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                box-shadow: 0 2px 10px rgba(102, 126, 234, 0.4);
        }

        .toggle-slider.annual {
                transform: translateX(24px);
        }

        .save-badge {
                display: inline-block;
                padding: 3px 6px;
                background: linear-gradient(135deg, #10b981 0%, #059669 100%);
                border-radius: 20px;
                font-size: 0.6rem;
                font-weight: 600;
                color: white;
                margin-left: 6px;
                vertical-align: middle;
        }

        .pricing-grid {
                display: grid;
                grid-template-columns: repeat(3, 280px);
                gap: 16px;
                margin-bottom: 20px;
                justify-content: center;
        }

        .pricing-card {
                position: relative;
                background: rgba(255, 255, 255, 0.05);
                backdrop-filter: blur(20px);
                -webkit-backdrop-filter: blur(20px);
                border: 1px solid rgba(255, 255, 255, 0.1);
                border-radius: 18px;
                padding: 24px 20px;
                transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                overflow: hidden;
        }

        .pricing-card::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                height: 1px;
                background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        }

        .pricing-card:hover {
                transform: translateY(-8px);
                border-color: rgba(255, 255, 255, 0.2);
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .pricing-card.highlighted {
                background: rgba(102, 126, 234, 0.1);
                border-color: rgba(102, 126, 234, 0.3);
                transform: scale(1.02);
        }

        .pricing-card.highlighted:hover {
                transform: scale(1.02) translateY(-8px);
        }

        .popular-badge {
                position: absolute;
                top: -1px;
                left: 50%;
                transform: translateX(-50%);
                padding: 5px 14px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 0 0 10px 10px;
                font-size: 0.6rem;
                font-weight: 600;
                text-transform: uppercase;
                letter-spacing: 1px;
        }

        .card-header {
                margin-bottom: 12px;
        }

        .card-header h2 {
                font-size: 1.1rem;
                font-weight: 700;
                margin-bottom: 4px;
                color: #ffffff;
        }

        .plan-description {
                font-size: 0.75rem;
                color: rgba(255, 255, 255, 0.5);
        }

        .price-section {
                margin-bottom: 14px;
                padding-bottom: 14px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .price {
                display: flex;
                align-items: flex-start;
                gap: 2px;
        }

        .currency {
                font-size: 1rem;
                font-weight: 600;
                color: rgba(255, 255, 255, 0.7);
                margin-top: 4px;
        }

        .amount {
                font-size: 2.5rem;
                font-weight: 800;
                line-height: 1;
                background: linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                background-clip: text;
                transition: all 0.3s ease;
        }

        .period {
                font-size: 0.8rem;
                color: rgba(255, 255, 255, 0.5);
                align-self: flex-end;
                margin-bottom: 4px;
                margin-left: 2px;
        }

        .annual-savings {
                margin-top: 4px;
                font-size: 0.7rem;
                color: rgba(16, 185, 129, 0.9);
                font-weight: 500;
        }

        .features-list {
                list-style: none;
                margin-bottom: 16px;
        }

        .features-list li {
                display: flex;
                align-items: center;
                gap: 8px;
                padding: 5px 0;
                font-size: 0.75rem;
                color: rgba(255, 255, 255, 0.8);
        }

        .check-icon {
                width: 14px;
                height: 14px;
                flex-shrink: 0;
                color: #10b981;
        }

        .cta-button {
                width: 100%;
                padding: 10px 16px;
                font-size: 0.8rem;
                font-weight: 600;
                border: none;
                border-radius: 10px;
                cursor: pointer;
                transition: all 0.3s ease;
                background: rgba(255, 255, 255, 0.1);
                color: #ffffff;
                border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .cta-button:hover {
                background: rgba(255, 255, 255, 0.15);
                transform: translateY(-2px);
        }

        .cta-button.primary {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border: none;
                box-shadow: 0 10px 30px -10px rgba(102, 126, 234, 0.5);
        }

        .cta-button.primary:hover {
                box-shadow: 0 15px 40px -10px rgba(102, 126, 234, 0.6);
                transform: translateY(-2px);
        }

        .footer {
                text-align: center;
        }

        .footer > p {
                color: rgba(255, 255, 255, 0.5);
                font-size: 0.75rem;
                margin-bottom: 12px;
        }

        .trust-badges {
                display: flex;
                justify-content: center;
                gap: 24px;
                flex-wrap: wrap;
        }

        .trust-item {
                display: flex;
                align-items: center;
                gap: 6px;
                color: rgba(255, 255, 255, 0.4);
                font-size: 0.7rem;
        }

        .trust-item svg {
                width: 14px;
                height: 14px;
                stroke: rgba(255, 255, 255, 0.4);
        }

        @media (max-width: 960px) {
                .pricing-grid {
                        grid-template-columns: repeat(3, 240px);
                        gap: 12px;
                }
        }

        @media (max-width: 768px) {
                .page-wrapper {
                        padding: 20px 16px;
                        height: auto;
                        min-height: 100vh;
                }

                :global(body) {
                        height: auto;
                        overflow: auto;
                }

                .pricing-grid {
                        grid-template-columns: 1fr;
                        gap: 16px;
                }

                .pricing-card.highlighted {
                        transform: none;
                }

                .pricing-card.highlighted:hover {
                        transform: translateY(-8px);
                }

                .toggle-wrapper {
                        flex-wrap: wrap;
                        gap: 10px;
                }

                .trust-badges {
                        gap: 16px;
                }

                .amount {
                        font-size: 2rem;
                }
        }
</style>
