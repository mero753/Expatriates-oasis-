// تعريف الأعراض لكل اضطراب
const disorderSymptoms = {
    ptsd: [1, 2, 3, 4], // أعراض اضطراب ما بعد الصدمة
    depression: [5, 6, 7, 8], // أعراض الاكتئاب
    anxiety: [9, 10, 11, 12], // أعراض القلق
    grief: [13, 14, 15], // أعراض الحزن المطول
    adjustment: [16, 17, 18], // أعراض اضطراب التكيف
    psychosomatic: [19], // أعراض نفسية جسدية
    substance: [20], // أعراض تعاطي المواد
    psychotic: [21, 22] // أعراض ذهانية
};

// الحد الأدنى للأعراض لكل اضطراب
const disorderThresholds = {
    ptsd: 3,
    depression: 3,
    anxiety: 3,
    grief: 2,
    adjustment: 2,
    psychosomatic: 1,
    substance: 1,
    psychotic: 1
};

// قاعدة بيانات خطط العلاج لكل اضطراب
const treatmentPlans = {
    ptsd: {
        title: 'PTSD Treatment Plan',
        modules: [
            {
                name: 'Understanding PTSD',
                resources: [
                    {type: 'Article', label: 'What is PTSD? (NIMH)', url: 'https://www.nimh.nih.gov/health/topics/post-traumatic-stress-disorder-ptsd'},
                    {type: 'Article', label: 'How Trauma Changes the Brain (Harvard)', url: 'https://www.health.harvard.edu/blog/how-trauma-changes-the-brain-202108162576'},
                    {type: 'Video', label: 'The Psychology of PTSD – TEDx', url: 'https://www.youtube.com/watch?v=hzSx4rMyVjU'},
                    {type: 'Video', label: 'Understanding PTSD', url: 'https://www.youtube.com/watch?v=4vl6wCiUZYc'}
                ]
            },
            {
                name: 'Grounding Techniques and Flashback Management',
                resources: [
                    {type: 'Article', label: 'Grounding Techniques', url: 'https://www.ptsduk.org/what-is-ptsd/grounding-techniques/'},
                    {type: 'PDF Guide', label: 'Free VA Workbook', url: 'https://www.ptsd.va.gov/publications/print/workbooks.asp'},
                    {type: 'Video', label: '5-4-3-2-1 Grounding Technique', url: 'https://www.youtube.com/watch?v=s7eKDD8K2y4'},
                    {type: 'Video', label: 'How to Stop PTSD Flashbacks', url: 'https://www.youtube.com/watch?v=6i83ZJnirfQ'}
                ]
            },
            {
                name: 'Trauma Processing (Exposure and EMDR)',
                resources: [
                    {type: 'Article', label: 'Exposure Therapy', url: 'https://www.apa.org/ptsd-guideline/patients-and-families/exposure-therapy'},
                    {type: 'Article', label: 'Self-EMDR Techniques', url: 'https://trauma-recovery.ca/emdr-resources/'},
                    {type: 'Video', label: 'Self-EMDR', url: 'https://www.youtube.com/watch?v=4EnMpKYR7Fw'},
                    {type: 'Video', label: 'Narrative Therapy for Trauma', url: 'https://www.youtube.com/watch?v=JX4WiykQX6w'}
                ]
            },
            {
                name: 'Cognitive Behavioral Therapy (CBT)',
                resources: [
                    {type: 'Worksheet', label: 'CBT for PTSD', url: 'https://www.psychologytools.com/downloads/cbt-worksheets-for-ptsd/'},
                    {type: 'Article', label: 'Managing PTSD with CBT', url: 'https://beckinstitute.org/blog/trauma-and-ptsd/'},
                    {type: 'Video', label: 'Understanding CBT for PTSD', url: 'https://www.youtube.com/watch?v=3mioCaLv5_I'},
                    {type: 'Video', label: 'Thought Reframing', url: 'https://www.youtube.com/watch?v=4kEO7Vj1-mA'}
                ]
            },
            {
                name: 'Mindfulness and Somatic Therapy',
                resources: [
                    {type: 'Article', label: 'Yoga for PTSD', url: 'https://www.traumasensitiveyoga.com/'},
                    {type: 'Article', label: 'Vagus Nerve Theory and Trauma', url: 'https://www.stephenporges.com/articles'},
                    {type: 'Video', label: 'Trauma Release Exercises', url: 'https://www.youtube.com/watch?v=U3XVK04mUbE'},
                    {type: 'Video', label: 'Mindfulness Meditation', url: 'https://www.youtube.com/watch?v=86m4RC_ADEY'}
                ]
            },
            {
                name: 'Building Resilience and Post-Traumatic Growth',
                resources: [
                    {type: 'Guide', label: 'Post-Traumatic Growth Workbook', url: 'https://www.ptsduk.org/post-traumatic-growth/'},
                    {type: 'Article', label: 'Rebuilding Life After Trauma', url: 'https://www.apa.org/ptsd-guideline/patients-and-families/recovery'},
                    {type: 'Video', label: 'What is Post-Traumatic Growth?', url: 'https://www.youtube.com/watch?v=sfLZ7fPK0X8'},
                    {type: 'Video', label: 'Finding Meaning After Trauma', url: 'https://www.youtube.com/watch?v=9VBBC9AfbKo'}
                ]
            }
        ]
    },
    depression: {
        title: 'Depression Treatment Plan',
        modules: [
            {
                name: 'Understanding Depression',
                resources: [
                    {type: 'Article', label: 'What is Depression? (NIMH)', url: 'https://www.nimh.nih.gov/health/topics/depression'},
                    {type: 'Article', label: 'The Neuroscience of Depression', url: 'https://www.health.harvard.edu/mind-and-mood/what-causes-depression'},
                    {type: 'Video', label: 'How Depression Affects the Brain', url: 'https://www.youtube.com/watch?v=NOAgplgTxfc'},
                    {type: 'Video', label: 'Unexpected Signs of Depression', url: 'https://www.youtube.com/watch?v=XiCrniLQGYc'}
                ]
            },
            {
                name: 'Behavioral Activation',
                resources: [
                    {type: 'Guide', label: 'Behavioral Activation Guide', url: 'https://www.getselfhelp.co.uk/docs/BAforDepression.pdf'},
                    {type: 'Exercises', label: 'Behavioral Activation Exercises', url: 'https://www.therapistaid.com/worksheets/behavioral-activation'},
                    {type: 'Video', label: 'How Behavioral Activation Treats Depression', url: 'https://www.youtube.com/watch?v=Y8kPxG1Gh4k'},
                    {type: 'Video', label: '5-Minute Rule to Overcome Procrastination', url: 'https://www.youtube.com/watch?v=ZXsQAXx_ao0'}
                ]
            },
            {
                name: 'Cognitive Behavioral Therapy (CBT)',
                resources: [
                    {type: 'Worksheet', label: 'CBT for Depression', url: 'https://www.psychologytools.com/downloads/cbt-worksheets-for-depression/'},
                    {type: 'Article', label: 'Core CBT Concepts', url: 'https://feelinggood.com/resources/'},
                    {type: 'Video', label: 'How CBT Changes Negative Thinking', url: 'https://www.youtube.com/watch?v=8j3Dz_dx7e0'},
                    {type: 'Video', label: 'ABC Model for Depression', url: 'https://www.youtube.com/watch?v=WRRdSm4ZjX4'}
                ]
            },
            {
                name: 'Mindfulness and Self-Compassion',
                resources: [
                    {type: 'Article', label: 'Mindfulness for Depression', url: 'https://www.mindful.org/mindfulness-for-depression/'},
                    {type: 'Exercises', label: 'Self-Compassion Exercises', url: 'https://self-compassion.org/category/exercises/'},
                    {type: 'Video', label: 'Mindfulness Meditation for Depression', url: 'https://www.youtube.com/watch?v=ss0D7JaoXzI'},
                    {type: 'Video', label: 'How Self-Compassion Heals Depression', url: 'https://www.youtube.com/watch?v=IvtZBUSplr4'}
                ]
            },
            {
                name: 'Lifestyle Changes',
                resources: [
                    {type: 'Article', label: 'Role of Diet in Depression', url: 'https://www.health.harvard.edu/blog/diet-and-depression-2018022213309'},
                    {type: 'Article', label: 'Exercise as Treatment for Depression', url: 'https://www.apa.org/monitor/2011/12/exercise'},
                    {type: 'Video', label: 'Best Exercise for Depression', url: 'https://www.youtube.com/watch?v=oK6k0w0zlw8'},
                    {type: 'Video', label: 'Sleep and Depression', url: 'https://www.youtube.com/watch?v=aXElAOxvWYM'}
                ]
            },
            {
                name: 'Building Resilience and Relapse Prevention',
                resources: [
                    {type: 'Guide', label: 'Resilience Workbook', url: 'https://www.cci.health.wa.gov.au/resources/looking-after-yourself'},
                    {type: 'Article', label: 'Preventing Depression Relapse', url: 'https://beckinstitute.org/blog/preventing-depression-relapse/'},
                    {type: 'Video', label: 'Building Emotional Resilience', url: 'https://www.youtube.com/watch?v=N5h0h3QZ_GQ'},
                    {type: 'Video', label: 'The Science of Happiness', url: 'https://www.youtube.com/watch?v=WPPPFqsECz0'}
                ]
            }
        ]
    },
    anxiety: {
        title: 'Anxiety Disorders Treatment Plan',
        modules: [
            {
                name: 'Understanding Anxiety Disorders',
                resources: [
                    {type: 'Article', label: 'What are Anxiety Disorders? (NIMH)', url: 'https://www.nimh.nih.gov/health/topics/anxiety-disorders'},
                    {type: 'Article', label: 'The Neuroscience of Anxiety', url: 'https://www.health.harvard.edu/blog/understanding-the-stress-response-202106172500'},
                    {type: 'Video', label: 'How Anxiety Reshapes the Brain', url: 'https://www.youtube.com/watch?v=WuyPuH9ojCE'},
                    {type: 'Video', label: 'Physical Symptoms of Anxiety', url: 'https://www.youtube.com/watch?v=1sjycB8t_UA'}
                ]
            },
            {
                name: 'Stopping Panic Attacks',
                resources: [
                    {type: 'Guide', label: 'Panic Attack Guide (PDF)', url: 'https://www.cci.health.wa.gov.au/Resources/Looking-After-Yourself/Panic'},
                    {type: 'Book Summary', label: 'DARE Response to Panic Attacks', url: 'https://dareresponse.com/anxiety-resources/'},
                    {type: 'Video', label: 'How to Stop a Panic Attack', url: 'https://www.youtube.com/watch?v=k4T5GGC7jF0'},
                    {type: 'Video', label: 'The 333 Rule for Anxiety', url: 'https://www.youtube.com/watch?v=JL9q5oBqjyY'}
                ]
            },
            {
                name: 'CBT for Anxiety',
                resources: [
                    {type: 'Worksheet', label: 'CBT for Anxiety', url: 'https://www.psychologytools.com/downloads/cbt-worksheets-for-anxiety/'},
                    {type: 'Exercises', label: 'The Worry Trick Book Exercises', url: 'https://www.anxietycoach.com/free-resources.html'},
                    {type: 'Video', label: 'Retraining the Anxious Brain', url: 'https://www.youtube.com/watch?v=LLdQALJpwho'},
                    {type: 'Video', label: '5 Questions to Stop Overthinking', url: 'https://www.youtube.com/watch?v=4kEO7Vj1-mA'}
                ]
            },
            {
                name: 'Exposure Therapy for Fears and Phobias',
                resources: [
                    {type: 'Guide', label: 'Self-Exposure Therapy', url: 'https://www.anxietycanada.com/articles/how-to-do-exposure-therapy/'},
                    {type: 'Worksheet', label: 'Fear Hierarchy (Free Template)', url: 'https://www.therapistaid.com/worksheets/fear-hierarchy'},
                    {type: 'Video', label: 'How Exposure Therapy Works', url: 'https://www.youtube.com/watch?v=wX9tSa1QjU4'},
                    {type: 'Video', label: 'Step-by-Step Social Anxiety Exposure', url: 'https://www.youtube.com/watch?v=KgJXq4JZWGU'}
                ]
            },
            {
                name: 'Calming the Nervous System',
                resources: [
                    {type: 'Article', label: 'Vagus Nerve Theory for Anxiety', url: 'https://www.stephenporges.com/articles'},
                    {type: 'Guide', label: 'Box Breathing Exercise', url: 'https://www.healthline.com/health/box-breathing'},
                    {type: 'Video', label: 'Resetting the Vagus Nerve', url: 'https://www.youtube.com/watch?v=WkHc5RxgA0s'},
                    {type: 'Video', label: '10-Minute Grounding Meditation', url: 'https://www.youtube.com/watch?v=86m4RC_ADEY'}
                ]
            },
            {
                name: 'Relapse Prevention and Building Resilience',
                resources: [
                    {type: 'Guide', label: 'Anxiety Relapse Prevention Plan (PDF)', url: 'https://www.getselfhelp.co.uk/docs/AnxietyRelapsePrevention.pdf'},
                    {type: 'Exercises', label: 'Anxiety Journal (Exercises & Writing)', url: 'https://www.therapistaid.com/journaling'},
                    {type: 'Video', label: 'How to Handle Anxiety Relapses', url: 'https://www.youtube.com/watch?v=w4kC4fWUT1I'},
                    {type: 'Video', label: 'The Science of Resilience', url: 'https://www.youtube.com/watch?v=8qk0Efu0qPw'}
                ]
            }
        ]
    },
    grief: {
        title: 'Prolonged Grief Disorder Treatment Plan',
        modules: [
            {
                name: 'Understanding Prolonged Grief',
                resources: [
                    {type: 'Article', label: 'What is Prolonged Grief Disorder?', url: 'https://www.psychiatry.org/patients-families/prolonged-grief-disorder'},
                    {type: 'Article', label: 'Stages of Grief', url: 'https://www.helpguide.org/articles/grief/coping-with-grief-and-loss.htm'},
                    {type: 'Video', label: 'Understanding Complicated Grief', url: 'https://www.youtube.com/watch?v=khkJkR-ipfw'},
                    {type: 'Video', label: 'How Grief Changes Over Time', url: 'https://www.youtube.com/watch?v=9VBBC9AfbKo'}
                ]
            },
            {
                name: 'Processing Difficult Emotions',
                resources: [
                    {type: 'Worksheet', label: 'Emotion Regulation Log', url: 'https://www.therapistaid.com/therapy-worksheet/emotion-regulation-skills'},
                    {type: 'Exercises', label: 'Emotion Acceptance Exercises', url: 'https://www.actmindfully.com.au/upimages/Complete_Worksheets_2014.pdf'},
                    {type: 'Video', label: 'How to Handle Difficult Emotions', url: 'https://www.youtube.com/watch?v=66cYcSak6nE'},
                    {type: 'Video', label: 'RAIN Technique for Emotions', url: 'https://www.youtube.com/watch?v=8qk0Efu0qPw'}
                ]
            },
            {
                name: 'Rebuilding Meaning',
                resources: [
                    {type: 'Guide', label: 'Rebuilding Meaning Workbook', url: 'https://www.psychologytools.com/downloads/meaning-in-life/'},
                    {type: 'Exercises', label: 'Values and Meaning Exercises', url: 'https://www.therapistaid.com/therapy-worksheet/values-clarification'},
                    {type: 'Video', label: 'Finding Meaning After Loss', url: 'https://www.youtube.com/watch?v=WkHc5RxgA0s'},
                    {type: 'Video', label: 'Post-Traumatic Growth', url: 'https://www.youtube.com/watch?v=86m4RC_ADEY'}
                ]
            },
            {
                name: 'Maintaining Connections',
                resources: [
                    {type: 'Guide', label: 'Maintaining Connections Guide', url: 'https://www.grief.com/'},
                    {type: 'Article', label: 'Continuing Bonds with the Deceased', url: 'https://www.psychologytoday.com/us/blog/grief-and-loss'},
                    {type: 'Video', label: 'How to Maintain Connections', url: 'https://www.youtube.com/watch?v=oX6I6vs1EFs'},
                    {type: 'Video', label: 'Talking to the Deceased', url: 'https://www.youtube.com/watch?v=U3XVK04mUbE'}
                ]
            },
            {
                name: 'Self-Care and Healing',
                resources: [
                    {type: 'Plan', label: 'Self-Care Plan', url: 'https://www.psychologytools.com/downloads/self-care/'},
                    {type: 'Exercises', label: 'Self-Care Exercises', url: 'https://www.therapistaid.com/therapy-worksheet/self-care'},
                    {type: 'Video', label: 'Self-Care in Grief', url: 'https://www.youtube.com/watch?v=khkJkR-ipfw'},
                    {type: 'Video', label: 'Building a Healing Routine', url: 'https://www.youtube.com/watch?v=9VBBC9AfbKo'}
                ]
            }
        ]
    },
    adjustment: {
        title: 'Adjustment Disorder Treatment Plan',
        modules: [
            {
                name: 'Understanding Adjustment Disorder',
                resources: [
                    {type: 'Article', label: 'What is Adjustment Disorder?', url: 'https://www.mayoclinic.org/diseases-conditions/adjustment-disorders/symptoms-causes/syc-20355224'},
                    {type: 'Article', label: 'DSM-5 Criteria for Adjustment Disorder', url: 'https://www.verywellmind.com/adjustment-disorder-2671580'},
                    {type: 'Video', label: 'Adjustment Disorder Explained', url: 'https://www.youtube.com/watch?v=XYZ123'},
                    {type: 'Video', label: 'How Stress Affects Your Brain', url: 'https://www.youtube.com/watch?v=XYZ124'}
                ]
            },
            {
                name: 'Identifying Stressors',
                resources: [
                    {type: 'Worksheet', label: 'Stress Inventory', url: 'https://www.therapistaid.com/therapy-worksheet/stress-inventory'},
                    {type: 'Scale', label: 'Life Changes Scale', url: 'https://www.apa.org/helpcenter/stress-scale'},
                    {type: 'Video', label: 'How to Identify Stress Triggers', url: 'https://www.youtube.com/watch?v=XYZ125'},
                    {type: 'Video', label: 'The Science of Stress', url: 'https://www.youtube.com/watch?v=XYZ126'}
                ]
            },
            {
                name: 'Building Coping Skills',
                resources: [
                    {type: 'Tools', label: 'Coping Skills Toolkit', url: 'https://www.psychologytools.com/resource/coping-skills'},
                    {type: 'Worksheet', label: 'Problem Solving', url: 'https://positivepsychology.com/problem-solving-worksheet/'},
                    {type: 'Video', label: '10 Healthy Coping Skills', url: 'https://www.youtube.com/watch?v=XYZ127'},
                    {type: 'Video', label: 'How to Build Emotional Resilience', url: 'https://www.youtube.com/watch?v=XYZ128'}
                ]
            },
            {
                name: 'Stress Management Techniques',
                resources: [
                    {type: 'Guide', label: 'Progressive Muscle Relaxation Guide', url: 'https://www.healthline.com/health/progressive-muscle-relaxation'},
                    {type: 'Article', label: 'Breathing Exercises for Stress', url: 'https://www.health.harvard.edu/mind-and-mood/relaxation-techniques-breath-control'},
                    {type: 'Video', label: '5-Minute Stress Relief Routine', url: 'https://www.youtube.com/watch?v=XYZ129'},
                    {type: 'Video', label: 'Box Breathing Technique', url: 'https://www.youtube.com/watch?v=XYZ130'}
                ]
            },
            {
                name: 'Social Support and Communication',
                resources: [
                    {type: 'Guide', label: 'How to Ask for Help', url: 'https://www.mhanational.org/how-ask-help'},
                    {type: 'Workbook', label: 'Communication Skills Workbook', url: 'https://positivepsychology.com/communication-worksheets/'},
                    {type: 'Video', label: 'How to Build a Support System', url: 'https://www.youtube.com/watch?v=XYZ131'},
                    {type: 'Video', label: 'Effective Communication Skills', url: 'https://www.youtube.com/watch?v=XYZ132'}
                ]
            },
            {
                name: 'Relapse Prevention and Maintaining Progress',
                resources: [
                    {type: 'Plan', label: 'Relapse Prevention Plan', url: 'https://www.therapistaid.com/therapy-worksheet/relapse-prevention'},
                    {type: 'Checklist', label: 'Self-Care Checklist', url: 'https://www.psychologytoday.com/us/blog/click-here-happiness/201812/self-care-checklist'},
                    {type: 'Video', label: 'How to Maintain Mental Health', url: 'https://www.youtube.com/watch?v=XYZ133'},
                    {type: 'Video', label: 'Creating a Self-Care Routine', url: 'https://www.youtube.com/watch?v=XYZ134'}
                ]
            }
        ]
    },
    psychosomatic: {
        title: 'Psychosomatic Symptoms Treatment Plan',
        modules: [
            {
                name: 'Understanding Psychosomatic Symptoms',
                resources: [
                    {type: 'Article', label: 'What are Psychosomatic Disorders?', url: 'https://my.clevelandclinic.org/health/diseases/21515-psychosomatic-disorder'},
                    {type: 'Article', label: 'The Mind-Body Connection', url: 'https://www.health.harvard.edu/mind-and-mood/the-power-of-the-mind-body-connection'},
                    {type: 'Video', label: 'How Emotions Affect Your Body', url: 'https://www.youtube.com/watch?v=0g9H7fYVnZo'},
                    {type: 'Video', label: "Psychosomatic Illness: The Body's Cry for Help", url: 'https://www.youtube.com/watch?v=1sjycB8t_UA'}
                ]
            },
            {
                name: 'Identifying Symptoms and Triggers',
                resources: [
                    {type: 'Worksheet', label: 'Symptom Monitoring Record', url: 'https://www.psychologytools.com/resource/symptom-monitoring-record'},
                    {type: 'Journal', label: 'Stress & Symptom Journal', url: 'https://www.mind.org.uk/information-support/types-of-mental-health-problems/somatisation/self-care/'},
                    {type: 'Video', label: 'How to Recognize Psychosomatic Symptoms', url: 'https://www.youtube.com/watch?v=LLdQALJpwho'},
                    {type: 'Video', label: 'Hidden Emotional Causes of Physical Pain', url: 'https://www.youtube.com/watch?v=6i83ZJnirfQ'}
                ]
            },
            {
                name: 'Stress Reduction Techniques',
                resources: [
                    {type: 'Guide', label: 'Progressive Muscle Relaxation Guide', url: 'https://www.anxietycanada.com/articles/how-to-do-progressive-muscle-relaxation/'},
                    {type: 'Article', label: 'Breathing Exercises for Stress Relief', url: 'https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/deep-breathing/art-20050900'},
                    {type: 'Video', label: '5-Minute Stress Relief Exercise', url: 'https://www.youtube.com/watch?v=86m4RC_ADEY'},
                    {type: 'Video', label: 'Resetting the Vagus Nerve for Stress', url: 'https://www.youtube.com/watch?v=WkHc5RxgA0s'}
                ]
            },
            {
                name: 'CBT for Psychosomatic Symptoms',
                resources: [
                    {type: 'Worksheet', label: 'Thought Record', url: 'https://www.therapistaid.com/therapy-worksheet/thought-record'},
                    {type: 'Article', label: 'Identifying Cognitive Distortions', url: 'https://positivepsychology.com/cognitive-distortions/'},
                    {type: 'Video', label: 'How CBT Helps Physical Symptoms', url: 'https://www.youtube.com/watch?v=8j3Dz_dx7e0'},
                    {type: 'Video', label: 'ABC Model for Psychosomatic Illness', url: 'https://www.youtube.com/watch?v=WRRdSm4ZjX4'}
                ]
            },
            {
                name: 'Body Awareness and Healing',
                resources: [
                    {type: 'Guide', label: 'Trauma-Sensitive Yoga Guide', url: 'https://www.traumasensitiveyoga.com/'},
                    {type: 'Script', label: 'Body Scan Meditation Script', url: 'https://www.mindful.org/body-scan-meditation/'},
                    {type: 'Video', label: 'Yoga for Stress Relief', url: 'https://www.youtube.com/watch?v=oX6I6vs1EFs'},
                    {type: 'Video', label: 'Somatic Experiencing Demo', url: 'https://www.youtube.com/watch?v=U3XVK04mUbE'}
                ]
            },
            {
                name: 'Lifestyle Changes for Long-Term Healing',
                resources: [
                    {type: 'Guide', label: 'Sleep Hygiene Guide', url: 'https://www.sleepfoundation.org/sleep-hygiene'},
                    {type: 'Article', label: 'Anti-Inflammatory Diet Plan', url: 'https://www.health.harvard.edu/staying-healthy/foods-that-fight-inflammation'},
                    {type: 'Video', label: 'How Gut Health Affects Mental Health', url: 'https://www.youtube.com/watch?v=oK6k0w0zlw8'},
                    {type: 'Video', label: 'Creating a Healing Routine', url: 'https://www.youtube.com/watch?v=9VBBC9AfbKo'}
                ]
            }
        ]
    },
    substance: {
        title: 'Substance Use Concerns Treatment Plan',
        modules: [
            {
                name: 'Understanding Addiction',
                resources: [
                    {type: 'Article', label: 'The Science of Addiction', url: 'https://nida.nih.gov/publications/drugs-brains-behavior-science-addiction'},
                    {type: 'Article', label: 'Stages of Change Model', url: 'https://www.apa.org/pi/about/publications/caregivers/practice-settings/intervention/stages-of-change'},
                    {type: 'Video', label: 'How Addiction Hijacks the Brain', url: 'https://youtu.be/NxHN1JQN7lw'},
                    {type: 'Video', label: 'Addiction Stigma', url: 'https://youtu.be/-Vs8YDGp5eM'}
                ]
            },
            {
                name: 'Building Motivation for Change',
                resources: [
                    {type: 'Worksheet', label: 'Pros and Cons of Substance Use', url: 'https://www.smartrecovery.org/smart-recovery-toolbox/'},
                    {type: 'Worksheet', label: 'Change Plan', url: 'https://store.samhsa.gov/product/change-plan-worksheet'},
                    {type: 'Video', label: 'Motivational Interviewing for Addiction', url: 'https://youtu.be/dX9QlXWIEj4'},
                    {type: 'Video', label: 'Finding Your "Why" in Recovery', url: 'https://youtu.be/4kEO7Vj1-mA'}
                ]
            },
            {
                name: 'Managing Cravings and Triggers',
                resources: [
                    {type: 'Tool', label: 'Urge Surfing Technique', url: 'https://www.psychologytools.com/resource/urge-surfing'},
                    {type: 'Worksheet', label: 'Identifying Triggers', url: 'https://www.therapistaid.com/therapy-worksheet/trigger-tracker'},
                    {type: 'Video', label: '15-Minute Rule for Cravings', url: 'https://youtu.be/k4T5GGC7jF0'},
                    {type: 'Video', label: 'How to Reprogram Addiction Triggers', url: 'https://youtu.be/LLdQALJpwho'}
                ]
            },
            {
                name: 'Behavioral Strategies for Recovery',
                resources: [
                    {type: 'Guide', label: 'Recovery Bingo Card', url: 'https://thephoenix.org/resources'},
                    {type: 'Plan', label: 'Relapse Prevention Plan', url: 'https://www.hazeldenbettyford.org/articles/relapse-prevention-plan'},
                    {type: 'Video', label: 'Building a New Routine in Recovery', url: 'https://youtu.be/w4kC4fWUT1I'},
                    {type: 'Video', label: 'The Habit Loop Explained', url: 'https://youtu.be/X6kY3RwQ0lE'}
                ]
            },
            {
                name: 'Repairing Relationships',
                resources: [
                    {type: 'Guide', label: 'Apology Guide', url: 'https://www.aa.org/assets/en_US/smf-121_en.pdf'},
                    {type: 'Worksheet', label: 'Healthy Boundaries', url: 'https://positivepsychology.com/great-self-care-setting-healthy-boundaries/'},
                    {type: 'Video', label: 'How to Apologize in Recovery', url: 'https://youtu.be/JL9q5oBqjyY'},
                    {type: 'Video', label: 'Rebuilding Trust After Addiction', url: 'https://youtu.be/WkHc5RxgA0s'}
                ]
            },
            {
                name: 'Managing Co-Occurring Disorders',
                resources: [
                    {type: 'Workbook', label: 'Dual Diagnosis Workbook', url: 'https://store.samhsa.gov/product/dual-diagnosis'},
                    {type: 'Tool', label: 'Mood Tracker', url: 'https://screening.mhanational.org/screening-tools'},
                    {type: 'Video', label: 'Trauma and Addiction Link', url: 'https://youtu.be/66cYcSak6nE'},
                    {type: 'Video', label: 'Medication-Assisted Treatment Explained', url: 'https://youtu.be/8qk0Efu0qPw'}
                ]
            },
            {
                name: 'Mindfulness and Relapse Prevention',
                resources: [
                    {type: 'Resource', label: 'Mindfulness-Based Relapse Prevention', url: 'https://mbrp.ucsd.edu/'},
                    {type: 'Technique', label: 'RAIN Technique for Cravings', url: 'https://www.tarabrach.com/rain/'},
                    {type: 'Video', label: '10-Minute Craving Meditation', url: 'https://youtu.be/86m4RC_ADEY'},
                    {type: 'Video', label: 'HALT: Hungry, Angry, Lonely, Tired', url: 'https://youtu.be/oX6I6vs1EFs'}
                ]
            },
            {
                name: 'Long-Term Recovery and Growth',
                resources: [
                    {type: 'Guide', label: 'Post-Traumatic Growth Workbook', url: 'https://www.ptsduk.org/post-traumatic-growth/'},
                    {type: 'Article', label: 'Finding Purpose After Addiction', url: 'https://thephoenix.org/why-we-do-it'},
                    {type: 'Video', label: 'What I Learned from 1000 Days in Recovery', url: 'https://youtu.be/khkJkR-ipfw'},
                    {type: 'Video', label: 'The Joy of Recovery', url: 'https://youtu.be/9VBBC9AfbKo'}
                ]
            }
        ]
    }
};

function analyzeResults() {
    const results = {};
    let totalSymptoms = 0;

    // Count symptoms for each disorder
    for (const [disorder, symptoms] of Object.entries(disorderSymptoms)) {
        const count = countSymptoms(symptoms);
        results[disorder] = count;
        totalSymptoms += count;
    }

    // Sort results by symptom count
    const sortedResults = Object.entries(results)
        .filter(([_, count]) => count > 0)
        .sort((a, b) => b[1] - a[1]);

    if (totalSymptoms === 0 || sortedResults.length === 0) {
        // Store the result in English only
        localStorage.setItem('assessmentResultSummary', `<div class="result-item" dir="rtl"><h3>Assessment Summary</h3><p>No clear symptoms detected</p></div>`);
        localStorage.setItem('assessmentTreatmentPlan', '');
        window.location.href = 'assessment-result.html';
        return;
    }

    // Disorders above threshold
    const mainDisorders = sortedResults.filter(([disorder, count]) => count >= disorderThresholds[disorder]);

    let summary = `<div class='result-item' dir='rtl' style='text-align:left;'><h3>Assessment Summary</h3><ul>`;
    let treatmentHTML = '';
    if (mainDisorders.length > 0) {
        mainDisorders.forEach(([disorder, count]) => {
            summary += `<li><b>${getDisorderName(disorder)}</b>: ${getDisorderDescription(disorder)}</li>`;
            if (treatmentPlans[disorder]) {
                const plan = treatmentPlans[disorder];
                treatmentHTML += `<div class='treatment-plan' dir='rtl' style='text-align:left;'><h3>${plan.title}</h3>`;
                plan.modules.forEach(module => {
                    treatmentHTML += `<div class='treatment-module'><h4>${module.name}</h4><ul>`;
                    module.resources.forEach(res => {
                        treatmentHTML += `<li><b>${res.type}:</b> <a href='${res.url}' target='_blank'>${res.label}</a></li>`;
                    });
                    treatmentHTML += `</ul></div>`;
                });
                treatmentHTML += `</div>`;
            }
        });
        summary += '</ul><p>Please consult a mental health professional for a full evaluation.</p></div>';
    } else {
        summary += `<li>No clear symptoms detected</li></ul></div>`;
        treatmentHTML = '';
    }
    localStorage.setItem('assessmentResultSummary', summary);
    localStorage.setItem('assessmentTreatmentPlan', treatmentHTML);
    window.location.href = 'assessment-result.html';
}

// عد الأعراض المحددة
function countSymptoms(symptomIds) {
    return symptomIds.filter(id => 
        document.getElementById(`symptom${id}`).checked
    ).length;
}

// الحصول على اسم الاضطراب بالعربية
function getDisorderName(disorder) {
    const names = {
        ptsd: 'Post-Traumatic Stress Disorder (PTSD)',
        depression: 'Depression',
        anxiety: 'Anxiety Disorders',
        grief: 'Prolonged Grief Disorder',
        adjustment: 'Adjustment Disorder',
        psychosomatic: 'Psychosomatic Symptoms',
        substance: 'Substance Use Concerns',
        psychotic: 'Psychotic Symptoms'
    };
    return names[disorder] || disorder;
}

// الحصول على وصف الاضطراب
function getDisorderDescription(disorder) {
    const descriptions = {
        ptsd: 'You may be experiencing symptoms of Post-Traumatic Stress Disorder. This is a mental health condition that can develop after experiencing or witnessing a traumatic event.',
        depression: 'You may be experiencing symptoms of Depression. This is a common and serious medical illness that negatively affects how you feel, think, and act.',
        anxiety: 'You may be experiencing symptoms of Anxiety Disorders. These are characterized by excessive fear, worry, and related behavioral disturbances.',
        grief: 'You may be experiencing symptoms of Prolonged Grief Disorder. This occurs when the natural grieving process becomes complicated and prolonged.',
        adjustment: 'You may be experiencing symptoms of Adjustment Disorder. This occurs when you have trouble coping with or adjusting to a significant life change or stressful event.',
        psychosomatic: 'You may be experiencing psychosomatic symptoms. These are physical symptoms that are caused or worsened by psychological factors.',
        substance: 'You may be experiencing concerns related to substance use. This could indicate a need to evaluate your relationship with alcohol or other substances.',
        psychotic: 'You may be experiencing psychotic symptoms. These can include hallucinations, delusions, or disorganized thinking.'
    };
    return descriptions[disorder] || '';
}

// إضافة مستمعي الأحداث
document.addEventListener('DOMContentLoaded', () => {
    const submitButton = document.getElementById('submitAssessment');
    const closeModal = document.querySelector('.close-modal');
    const modal = document.getElementById('resultsModal');

    submitButton.addEventListener('click', analyzeResults);

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    const summary = localStorage.getItem('assessmentResultSummary');
    const treatment = localStorage.getItem('assessmentTreatmentPlan');
    if (summary) {
        document.getElementById('resultSummaryContainer').innerHTML = summary;
    }
    if (treatment) {
        document.getElementById('treatmentPlanContainer').innerHTML = treatment;
    }
}); 