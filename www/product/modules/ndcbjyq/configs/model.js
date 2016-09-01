define({
    ndcbjyq: {
        mainMenu: [{

        }],
        // ������
        registrationApplication: {
            fields: {
                PetitionType: {
                    displayName: '��������',
                    type: 'string',
                    uiHint: 'select'
                },
                PetitionName: {
                    displayName: '������',
                    type: 'string',
                    validation: {
                        required: true
                    }
                },
                PetitionDate: {
                    displayName: '��������',
                    type: 'date'
                },
                PetitionOptions: {
                    displayName: '��������',
                    type: 'string',
                    uiHint: 'textarea'
                }
            }
        },
        // �Ǽǲ�
        registrationBook: {
            fields: {
                OutsourcerNumber: {
                    displayName: '������',
                    type: 'string',
                    uiHint: 'select'
                },
                ContractWay: {
                    displayName: '�а���ʽ',
                    type: 'string',
                    uiHint: 'select',
                    validation: {
                        required: true
                    }
                },
                RegisteDate: {
                    displayName: '�Ǽ�����',
                    type: 'date',
                    uiHint: 'date'
                }
            }

        },
        // ��ͥ��Ա
        familyMember: {
            displayName: '��ͥ��Ա',
            fields: {
                Name: {
                    displayName: '����',
                    type: 'string',
                    validation: {
                        required: true
                    }
                },
                CredType: {
                    displayName: '֤������',
                    type: 'string',
                    uiHint: 'select',
                    validation: {
                        required: true
                    }
                },
                Number: {
                    displayName: '֤������',
                    type: 'string'
                },
                Gender: {
                    displayName: '�Ա�',
                    type: 'string',
                    uiHint: 'select',
                    validation: {
                        required: true
                    }
                },
                Birth: {
                    displayName: '��������',
                    type: 'date',
                    displayFormat: 'yyyy-MM-dd'
                },
                Rel: {
                    displayName: '�뻧����ϵ',
                    type: 'string',
                    uiHint: 'select'
                },
                IsShare: {
                    displayName: '�Ƿ�����',
                    type: 'boolean',
                    uiHint: 'radiogroup',
                    validation: {
                        required: true
                    }
                },
                Comment: {
                    displayName: '��ע',
                    type: 'string',
                    uiHint: 'combobox'
                },
                GenderDisplay: {
                    displayName: '�Ա�',
                    calculate: function (context, app) {
                        return app.dataUtil.getSelectListDisplay(context.GenderList, this.Gender);
                    }
                },
                RelDisplay: {
                    displayName: '�뻧����ϵ',
                    calculate: function (context, app) {
                        return app.dataUtil.getSelectListDisplay(context.RelList, this.Rel);
                    }
                }

            },
            views: {
                list: ['Name', 'Number', 'GenderDisplay', 'Birth', 'RelDisplay']
            }
        },
        // �а���
        contractor: {
            displayName: '�а���',
            fields: {

            }
        }
    }
});
