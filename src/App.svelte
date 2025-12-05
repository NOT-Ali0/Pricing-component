<script>
        import { onMount } from "svelte";
        import Navbar from "./Navbar.svelte";

        let isAnnual = false;
        let isDarkMode = false;

        const plans = [
                {
                        name: "free trial",
                        description: "Perfect for getting started",
                        monthlyPrice: 0,   //if you want to change the price
                        annualPrice: 0,
                        features: [
                                "Up to 5 projects",
                                // add features here
                        ],
                        highlighted: false,
                        cta: "Get Started",
                },
                {
                        name: "Pro",
                        description: "Best for growing teams",
                        monthlyPrice: 10,   //if you want to change the price
                        annualPrice: 8,
                        features: ["Unlimited projects",
                                //add features here
                        ],
                        highlighted: true,
                        cta: "Start With Pro",
                },
                {
                        name: "Premium",
                        description: "For power users",
                        monthlyPrice: 15,   //if you want to change the price
                        annualPrice: 12,    
                        features: [
                                "Everything in Pro",
                                // add features here
                        ],
                        highlighted: false,
                        cta: "Get Premium",
                },
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

        function toggleTheme() {
                isDarkMode = !isDarkMode;
                updateBodyClass();
        }

        function updateBodyClass() {
                if (isDarkMode) {
                        document.body.classList.add("dark");
                } else {
                        document.body.classList.remove("dark");
                }
        }

        onMount(() => {
                if (
                        window.matchMedia &&
                        window.matchMedia("(prefers-color-scheme: dark)")
                                .matches
                ) {
                        isDarkMode = true;
                }
                updateBodyClass();
        });
</script>

<svelte:head>
        <title>Pricing - Choose Your Plan</title>
</svelte:head>

<Navbar {isDarkMode} {toggleTheme} />

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
                        <p class="subtitle">
                                Start free, upgrade when you're ready. No hidden
                                fees, cancel anytime.
                        </p>
                </header>

                <div class="toggle-wrapper">
                        <span class:active={!isAnnual}>Monthly</span>
                        <button
                                class="toggle"
                                on:click={toggleBilling}
                                aria-label="Toggle billing period"
                        >
                                <span
                                        class="toggle-slider"
                                        class:annual={isAnnual}
                                ></span>
                        </button>
                        <span class:active={isAnnual}>
                                Annual
                                <span class="save-badge">Save 20%</span>
                        </span>
                </div>

                <div class="pricing-grid">
                        {#each plans.filter((p) => !isAnnual || p.name !== "free trial") as plan}
                                <div
                                        class="pricing-card"
                                        class:highlighted={plan.highlighted}
                                >
                                        {#if plan.highlighted}
                                                <div class="popular-badge">
                                                        Most Popular
                                                </div>
                                        {/if}

                                        <div class="card-header">
                                                <h2>{plan.name}</h2>
                                        </div>

                                        <div class="price-section">
                                                <div class="price">
                                                        <span class="currency"
                                                                >$</span
                                                        >
                                                        <span class="amount"
                                                                >{getPrice(
                                                                        plan,
                                                                )}</span
                                                        >
                                                        <span class="period"
                                                                >/month</span
                                                        >
                                                </div>
                                                {#if isAnnual}
                                                        <p
                                                                class="annual-savings"
                                                        >
                                                                Save ${getSavings(
                                                                        plan,
                                                                )} per year
                                                        </p>
                                                
                                                {/if}
                                        </div>

                                        <ul class="features-list">
                                                {#each plan.features as feature}
                                                        <li>
                                                                <svg
                                                                        class="check-icon"
                                                                        viewBox="0 0 24 24"
                                                                        fill="none"
                                                                        stroke="currentColor"
                                                                        stroke-width="2.5"
                                                                >
                                                                        <polyline
                                                                                points="20 6 9 17 4 12"

                                                                        ></polyline>
                                                                </svg>
                                                                {feature}
                                                        </li>
                                                {/each}
                                        </ul>

                                        <button
                                                class="cta-button"
                                                class:primary={plan.highlighted}
                                        >
                                                {plan.cta}
                                        </button>
                                </div>
                        {/each}
                </div>

                <footer class="footer">
                        <p>
                                All plans include a 14-day free trial. No credit
                                card required.
                        </p>
                </footer>
        </main>
</div>
