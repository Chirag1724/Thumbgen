import { motion } from 'motion/react';
import { ScrollTextIcon } from 'lucide-react';
import SoftBackdrop from '../components/SoftBackdrop';

const sections = [
    {
        title: '1. Acceptance of Terms',
        content: `By accessing or using ThumbGen ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service. These Terms apply to all visitors, users, and others who access or use ThumbGen.`,
    },
    {
        title: '2. Description of Service',
        content: `ThumbGen is an AI-powered YouTube thumbnail generation platform. The Service allows registered users to generate, store, preview, and download thumbnail images for use on YouTube and other video platforms. The AI generation is powered by Google Gemini and images are stored via Cloudinary.`,
    },
    {
        title: '3. Account Registration',
        content: `To access the full features of ThumbGen, you must create an account by providing a valid name, email address, and password. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.`,
    },
    {
        title: '4. Acceptable Use',
        content: `You agree not to use ThumbGen to generate content that is illegal, hateful, harassing, defamatory, sexually explicit, or that infringes the intellectual property rights of others. You may not use the Service to generate thumbnails that impersonate real individuals in a misleading way, promote violence or discrimination, or violate any applicable laws or regulations.`,
    },
    {
        title: '5. AI-Generated Content & Ownership',
        content: `Thumbnails generated through ThumbGen using your inputs are yours to use for personal and commercial purposes, including on YouTube and other platforms. However, ThumbGen and its underlying AI providers (Google Gemini) do not guarantee that generated content is free from similarities to existing copyrighted works. You use generated content at your own discretion and assume all responsibility for its use.`,
    },
    {
        title: '6. Credits & Usage Limits',
        content: `ThumbGen may implement usage limits or a credits system depending on your subscription plan. Free accounts may have a limited number of generations per month. Paid plan credits do not roll over between billing cycles unless stated otherwise. ThumbGen reserves the right to modify plan limits with prior notice to users.`,
    },
    {
        title: '7. Intellectual Property',
        content: `All software, design, branding, and code comprising the ThumbGen platform — excluding user-generated thumbnails — are the intellectual property of ThumbGen and its developers. You may not copy, modify, distribute, or reverse-engineer any part of the platform without explicit written permission.`,
    },
    {
        title: '8. Disclaimer of Warranties',
        content: `ThumbGen is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not guarantee that the Service will be uninterrupted, error-free, or that the AI-generated results will meet your expectations. The quality of AI-generated thumbnails may vary based on your inputs and model availability.`,
    },
    {
        title: '9. Limitation of Liability',
        content: `To the maximum extent permitted by applicable law, ThumbGen and its operators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of revenue, data, or goodwill, arising from your use or inability to use the Service, even if we have been advised of the possibility of such damages.`,
    },
    {
        title: '10. Termination',
        content: `We reserve the right to suspend or terminate your account at any time if you violate these Terms of Service or engage in conduct we deem harmful to the platform or other users. Upon termination, your access to the Service will be revoked and your data may be deleted in accordance with our Privacy Policy.`,
    },
    {
        title: '11. Changes to Terms',
        content: `ThumbGen reserves the right to update these Terms of Service at any time. We will notify users of material changes via email or in-app notification. Continued use of the Service after the effective date of any changes constitutes your acceptance of the revised terms.`,
    },
    {
        title: '12. Governing Law',
        content: `These Terms of Service shall be governed by and interpreted in accordance with applicable laws. Any disputes arising from the use of ThumbGen shall first be attempted to be resolved through good-faith negotiation. If unresolved, disputes may be submitted to binding arbitration or a court of competent jurisdiction.`,
    },
    {
        title: '13. Contact',
        content: `For any questions or concerns about these Terms of Service, please reach out to us at: support@thumbgen.app`,
    },
];

export default function TermsPage() {
    return (
        <>
            <SoftBackdrop />
            <div className='min-h-screen pt-28 pb-24 px-6 md:px-16 lg:px-24 xl:px-32'>
                <motion.div
                    className='max-w-3xl mx-auto'
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                    {/* Header */}
                    <div className='flex items-center gap-3 mb-3'>
                        <div className='p-2 rounded-lg bg-pink-600/20 border border-pink-500/30'>
                            <ScrollTextIcon className='size-5 text-pink-400' />
                        </div>
                        <span className='text-xs font-medium text-pink-400 uppercase tracking-widest'>Legal</span>
                    </div>
                    <h1 className='text-3xl md:text-4xl font-bold text-zinc-100 mb-3'>Terms of Service</h1>
                    <p className='text-sm text-zinc-500 mb-10'>
                        Last updated: <span className='text-zinc-400'>April 30, 2025</span>
                    </p>

                    <p className='text-zinc-400 leading-relaxed mb-10'>
                        Please read these Terms of Service carefully before using <span className='text-zinc-200 font-medium'>ThumbGen</span>. These terms constitute a legally binding agreement between you and ThumbGen regarding your use of the platform and all related services.
                    </p>

                    {/* Divider */}
                    <div className='border-t border-white/8 mb-10' />

                    {/* Sections */}
                    <div className='space-y-10'>
                        {sections.map((section, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.04, duration: 0.4 }}
                            >
                                <h2 className='text-base font-semibold text-zinc-100 mb-3'>{section.title}</h2>
                                <p className='text-zinc-400 leading-7 text-sm'>{section.content}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Footer note */}
                    <div className='mt-14 p-5 rounded-xl bg-white/5 border border-white/10 text-sm text-zinc-400 leading-relaxed'>
                        By using ThumbGen, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service. If you are using ThumbGen on behalf of an organization, you represent that you have the authority to bind that organization to these terms.
                    </div>
                </motion.div>
            </div>
        </>
    );
}
