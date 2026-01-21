import React from 'react';
import { BookOpen, Bot, Users, Gamepad2, Cpu, Radio, ExternalLink, MessageCircle } from 'lucide-react';
import { Spoke } from '../types';

const spokes: Spoke[] = [
	{
		id: 'training',
		title: 'The Training',
		subtitle: 'Protocol Zero',
		description:
			'The training ground. Home of "Protocol Zero: The Great Heist." A dedicated community of Operators reclaiming their hardware on Skool.',
		url: 'https://skool.com/tame-the-dmn/about',
		cta: 'Join Protocol',
		icon: Users,
		variant: 'cyan',
		thumbnail: '/spokes/skool-ss.png',
	},
	{
		id: 'ai',
		title: 'The AI Guide',
		subtitle: 'The Daemon',
		description:
			'An AI-powered functional guide. Unlike generic chatbots, this RAG system is grounded strictly in ClaimFreedom protocols. Features specialized user journeys for crisis stabilization.',
		url: 'https://daemon.tamethedmn.com',
		cta: 'Activate Daemon',
		icon: Bot,
		variant: 'purple',
		thumbnail: '/spokes/dmn-chat-ss.png',
	},
	{
		id: 'wiki',
		title: 'The Knowledge Base',
		subtitle: 'claimfreedom.org',
		description:
			'The Source of Truth. A comprehensive Neuro-Gnostic wiki covering the neuroscience, philosophy, and theology.',
		url: 'https://claimfreedom.org',
		cta: 'Access Archives',
		icon: BookOpen,
		variant: 'amber',
		thumbnail: '/spokes/claim-freedom-ss.png',
	},
	{
		id: 'discord',
		title: 'The Community',
		subtitle: 'Discord',
		description:
			'Connect with fellow Operators, share insights, and collaborate on the Tame the DMN mission.',
		url: 'https://discord.tamethedmn.com',
		cta: 'Join Community',
		icon: MessageCircle,
		variant: 'cyan',
		thumbnail: '/spokes/discord-promo.jpg',
	},
	{
		id: 'sim',
		title: 'The Simulation',
		subtitle: 'Critical Mass',
		description:
			'A massively multiplayer bio-rhythm game. Sync rhythms globally to flush out the "Wetiko" virus and achieve coherence.',
		url: 'https://tamethedemon.com',
		cta: 'Enter Game',
		icon: Gamepad2,
		variant: 'purple',
		thumbnail: '/spokes/critical-mass-ss.png',
	},
	{
		id: 'hardware',
		title: 'The Hardware',
		subtitle: 'Halo Tuner',
		description:
			'Project H.A.L.O. A wearable neuro-feedback device acting as mechanical training wheels for the Listener.',
		url: 'https://halotuner.com',
		cta: 'View Specs',
		icon: Cpu,
		variant: 'amber',
		thumbnail: '/spokes/halo-promo-2.jpeg',
	},
	{
		id: 'voice',
		title: 'The Signal',
		subtitle: 'Substack',
		description:
			'Field notes and transmissions from the front lines of the consciousness revolution.',
		url: 'https://jeshuabenjoseph.substack.com',
		cta: 'Receive Signal',
		icon: Radio,
		variant: 'cyan',
		thumbnail: '/spokes/substack-ss.png',
	},
];

export const SpokeGrid: React.FC = () => {
	const getVariantStyles = (variant: Spoke['variant']) => {
		switch (variant) {
			case 'amber':
				return {
					accent: 'text-molten-gold',
					border: 'group-hover:border-molten-gold/50',
					shadow: 'group-hover:shadow-molten-gold/20',
					bg: 'group-hover:bg-molten-gold/5',
					corner: 'border-molten-gold',
				};
			case 'purple':
				return {
					accent: 'text-purple',
					border: 'group-hover:border-purple/50',
					shadow: 'group-hover:shadow-purple/20',
					bg: 'group-hover:bg-purple/5',
					corner: 'border-purple',
				};
			case 'cyan':
			default:
				return {
					accent: 'text-electric-cyan',
					border: 'group-hover:border-electric-cyan/50',
					shadow: 'group-hover:shadow-electric-cyan/20',
					bg: 'group-hover:bg-electric-cyan/5',
					corner: 'border-electric-cyan',
				};
		}
	};

	return (
		<section
			className="py-24 bg-midnight-indigo relative overflow-hidden scroll-mt-12"
			id="ecosystem"
		>
			<div className="container mx-auto px-4">
				<div className="text-center mb-16">
					<h2 className="font-serif text-4xl text-white mb-4">
						The Ecosystem
					</h2>
					<div className="h-1 w-24 bg-gradient-to-r from-transparent via-electric-cyan to-transparent mx-auto"></div>
					<p className="mt-4 text-slate-400 font-mono uppercase tracking-widest text-sm">
						Select Your Interface
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{spokes.map((spoke) => {
						const styles = getVariantStyles(spoke.variant);

						return (
							<a
								key={spoke.id}
								href={spoke.url}
								target="_blank"
								rel="noopener noreferrer"
								className={`group relative bg-slate-900/40 border border-white/5 p-8 rounded-xl transition-all duration-300 hover:-translate-y-2 hover:bg-slate-900/80 hover:shadow-2xl ${styles.border} ${styles.shadow}`}
							>
								{/* Header */}
								<div className="flex justify-between items-start mb-6">
									<div
										className={`p-3 rounded-lg bg-white/5 ${styles.accent} transition-colors duration-300 ${styles.bg}`}
									>
										<spoke.icon size={32} strokeWidth={1.5} />
									</div>
									<ExternalLink
										className="text-slate-600 group-hover:text-white transition-colors"
										size={16}
									/>
								</div>

								{/* Thumbnail */}
								{spoke.thumbnail && (
									<div className="mb-6 overflow-hidden rounded-lg border border-white/5 group-hover:border-white/10 transition-colors">
										<img
											src={spoke.thumbnail}
											alt={spoke.title}
											className="w-full h-40 object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
										/>
									</div>
								)}

								{/* Content */}
								<h3 className="text-2xl font-serif text-white mb-1 group-hover:text-white transition-colors">
									{spoke.title}
								</h3>
								<p
									className={`font-mono text-xs uppercase tracking-wider mb-4 ${styles.accent} opacity-80`}
								>
									{spoke.subtitle}
								</p>
								<p className="text-slate-400 leading-relaxed text-sm mb-8 min-h-[5rem] line-clamp-4">
									{spoke.description}
								</p>

								{/* CTA Fake Button */}
								<div
									className={`inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest ${styles.accent} border-b border-transparent group-hover:border-current transition-all`}
								>
									{spoke.cta}
									<div className="w-1 h-1 bg-current rounded-full animate-ping" />
								</div>

								{/* Decorative Corners */}
								<div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
									<div
										className={`w-2 h-2 border-t border-r ${styles.corner}`}
									></div>
								</div>
								<div className="absolute bottom-0 left-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
									<div
										className={`w-2 h-2 border-b border-l ${styles.corner}`}
									></div>
								</div>
							</a>
						);
					})}
				</div>
			</div>
		</section>
	);
};