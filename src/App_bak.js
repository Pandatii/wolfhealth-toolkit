import React, { useState } from 'react';
import { Search, ChevronRight, Calculator, FileText, Users, Target, Award, TrendingUp, DollarSign, Settings, CheckSquare } from 'lucide-react';

const SalesToolkit = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTool, setSelectedTool] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // ใส่ตรงนี้ - หลัง useState และก่อน styles
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Inline styles
  const styles = {
    container: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      background: 'linear-gradient(135deg, #e0f2fe 0%, #ffffff 50%, #f3e5f5 100%)',
      minHeight: '100vh',
      margin: 0,
      padding: 0,
    },
    header: {
      background: 'white',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      borderBottom: '1px solid #e5e7eb',
    },
    headerContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '24px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    },
    title: {
      fontSize: '30px',
      fontWeight: 'bold',
      color: '#111827',
      margin: 0,
    },
    subtitle: {
      color: '#6b7280',
      marginTop: '8px',
    },
    statusBadge: {
      display: 'flex',
      alignItems: 'center',
      background: '#dcfce7',
      color: '#166534',
      padding: '4px 12px',
      borderRadius: '20px',
      fontSize: '14px',
    },
    statusDot: {
      width: '8px',
      height: '8px',
      background: '#22c55e',
      borderRadius: '50%',
      marginRight: '8px',
    },
    mainContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '32px 16px',
    },
    searchSection: {
      marginBottom: '32px',
    },
    searchInputContainer: {
      position: 'relative',
      marginBottom: '16px',
    },
    searchInput: {
      width: '100%',
      padding: '12px 12px 12px 40px',
      border: '1px solid #d1d5db',
      borderRadius: '8px',
      fontSize: '16px',
      outline: 'none',
      boxSizing: 'border-box',
    },
    searchIcon: {
      position: 'absolute',
      left: '12px',
      top: '12px',
      color: '#9ca3af',
    },
    filterButtons: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
    },
    filterBtn: {
      padding: '8px 16px',
      borderRadius: '8px',
      fontWeight: '500',
      border: '1px solid #d1d5db',
      background: 'white',
      color: '#6b7280',
      cursor: 'pointer',
      transition: 'all 0.2s',
    },
    filterBtnActive: {
      padding: '8px 16px',
      borderRadius: '8px',
      fontWeight: '500',
      border: '1px solid #3b82f6',
      background: '#3b82f6',
      color: 'white',
      cursor: 'pointer',
      transition: 'all 0.2s',
    },
    toolsGrid: {
      display: 'grid',
      gap: '24px',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      marginBottom: '48px',
    },
    toolCard: {
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb',
      padding: '24px',
      cursor: 'pointer',
      transition: 'all 0.2s',
    },
    toolHeader: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '12px',
    },
    toolIcon: {
      flexShrink: 0,
      padding: '8px',
      background: '#dbeafe',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    toolContent: {
      flex: 1,
      minWidth: 0,
    },
    toolTitle: {
      fontSize: '18px',
      fontWeight: '600',
      color: '#111827',
      marginBottom: '4px',
    },
    toolDescription: {
      fontSize: '14px',
      color: '#6b7280',
      marginBottom: '12px',
    },
    toolCategory: {
      display: 'inline-block',
      padding: '2px 8px',
      fontSize: '12px',
      fontWeight: '500',
      background: '#f3f4f6',
      color: '#6b7280',
      borderRadius: '4px',
    },
    chevronIcon: {
      color: '#9ca3af',
    },
    emptyState: {
      textAlign: 'center',
      padding: '48px 0',
    },
    emptyIcon: {
      width: '96px',
      height: '96px',
      background: '#f3f4f6',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 16px',
    },
    emptyTitle: {
      fontSize: '18px',
      fontWeight: '500',
      color: '#111827',
      marginBottom: '8px',
    },
    emptyText: {
      color: '#6b7280',
    },
    statsSection: {
      background: 'white',
      borderRadius: '12px',
      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb',
      padding: '24px',
      marginTop: '48px',
    },
    statsTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#111827',
      marginBottom: '16px',
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '16px',
    },
    statItem: {
      textAlign: 'center',
      padding: '16px',
      background: '#f9fafb',
      borderRadius: '8px',
    },
    statNumber: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#3b82f6',
    },
    statLabel: {
      fontSize: '14px',
      color: '#6b7280',
      marginTop: '4px',
    },
    footer: {
      background: 'white',
      borderTop: '1px solid #e5e7eb',
      marginTop: '64px',
    },
    footerContainer: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '32px 16px',
      textAlign: 'center',
      color: '#6b7280',
    },
  };

  //pdfFile: '/HC_Trend.pdf';

  const toolCategories = {
    starter: {
      title: '1. Starter (เริ่มต้น)',
      color: 'bg-yellow-100 border-yellow-300',
      tools: [
        { name: 'Krungthai Healthcare Ecosystem', icon: <Users size={20} />, description: 'Krungthai Healthcare Ecosystem',imageFile: '/hc_eco.png' },
        { name: 'Wolf Health ทำอะไร', icon: <Users size={20} />, description: 'Wolf Health ทำอะไร',imageFile: '/wh.png' },
        { name: 'โอกาสทางธุรกิจ', icon: <Users size={20} />, description: 'โอกาสทางธุรกิจ'
                ,pdfFile:'HC_Trend.pdf'}
      ]
    },
    Negotiation: {
      title: '2. Negotiation (เจรจา)',
      color: 'bg-yellow-100 border-yellow-300',
      tools: [
        { name: 'NHSO Supplier OD', icon: <Users size={20} />, description: 'NHSO Supplier OD',pdfFile: '/HC_Trend.pdf' },
        { name: 'Buyer OD', icon: <Users size={20} />, description: 'Buyer OD',imageFiles:['/bl1.png','/bl2.png']},
        { name: 'Do/Don\'t', icon: <Users size={20} />, description: 'Do Don\'t',imageFiles:['/bl1.png','/bl2.png']},
        { name: 'Calculator', icon: <Users size={20} />, description: 'Calculator',imageFiles:['/bl1.png','/bl2.png']}
      ]
    },
    Win: {
      title: '3. Win (พิชิตใจ)',
      color: 'bg-yellow-100 border-yellow-300',
      tools: [
        { name: 'checklist เอกสาร', icon: <Users size={20} />, description: 'Wolf Health project เราทำอะไร',pdfFile: '/HC_Trend.pdf' },
        { name: 'Follow up', icon: <Users size={20} />, description: 'โอกาสทางธุรกิจ',imageFiles:['/bl1.png','/bl2.png']}
      ]
    },
    Campaign: {
      title: '4. Campaign',
      color: 'bg-yellow-100 border-yellow-300',
      tools: [
        { name: 'Top Sale', icon: <Users size={20} />, description: 'Wolf Health project เราทำอะไร',pdfFile: '/HC_Trend.pdf' },
        { name: 'Krungthai Healthcare Ecosystem', icon: <Users size={20} />, description: 'Wolf Health project เราทำอะไร',pdfFile: '/HC_Trend.pdf' }
      ]
    }
  };

  const allTools = Object.values(toolCategories).flatMap(category => 
    category.tools.map(tool => ({ ...tool, category: category.title }))
  );

  const filteredTools = selectedCategory === 'all' 
    ? allTools 
    : toolCategories[selectedCategory]?.tools.map(tool => ({ 
        ...tool, 
        category: toolCategories[selectedCategory].title 
      })) || [];

  const searchedTools = filteredTools.filter(tool =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.headerContainer}>
          <div>
            <h1 style={styles.title}>WolfHealth Toolkit</h1>
            <p style={styles.subtitle}>เครื่องมือสำหรับทีมขาย Wolf Hero</p>
          </div>
          <div style={styles.statusBadge}>
            <div style={styles.statusDot}></div>
            พร้อมใช้งาน
          </div>
        </div>
      </header>

      <div style={styles.mainContainer}>
        {/* Search and Filter */}
        <div style={styles.searchSection}>
          <div style={styles.searchInputContainer}>
            <Search style={styles.searchIcon} size={20} />
            <input
              type="text"
              placeholder="ค้นหาเครื่องมือ..."
              style={styles.searchInput}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div style={styles.filterButtons}>
            <button
              onClick={() => setSelectedCategory('all')}
              style={selectedCategory === 'all' ? styles.filterBtnActive : styles.filterBtn}
            >
              ทั้งหมด ({allTools.length})
            </button>
            {Object.entries(toolCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                style={selectedCategory === key ? styles.filterBtnActive : styles.filterBtn}
              >
                {category.title} ({category.tools.length})
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div style={styles.toolsGrid}>
          {searchedTools.map((tool, index) => (
            <div 
              key={index} 
              style={styles.toolCard}
              onClick={() => setSelectedTool(tool)}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                e.currentTarget.querySelector('.tool-icon').style.background = '#bfdbfe';
                e.currentTarget.querySelector('.tool-title').style.color = '#3b82f6';
                e.currentTarget.querySelector('.chevron-icon').style.color = '#3b82f6';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
                e.currentTarget.querySelector('.tool-icon').style.background = '#dbeafe';
                e.currentTarget.querySelector('.tool-title').style.color = '#111827';
                e.currentTarget.querySelector('.chevron-icon').style.color = '#9ca3af';
              }}
            >
              <div style={styles.toolHeader}>
                <div className="tool-icon" style={styles.toolIcon}>
                  {tool.icon}
                </div>
                <div style={styles.toolContent}>
                  <h3 className="tool-title" style={styles.toolTitle}>{tool.name}</h3>
                  <p style={styles.toolDescription}>{tool.description}</p>
                  <div>
                    <span style={styles.toolCategory}>{tool.category}</span>
                  </div>
                </div>
                <ChevronRight className="chevron-icon" style={styles.chevronIcon} size={20} />
              </div>
            </div>
          ))}
        </div>

    {/* Image/PDF Content Viewer */}
        {selectedTool && (selectedTool.content || selectedTool.pdfFile || selectedTool.imageFile || selectedTool.imageFiles) && (
          <div style={styles.contentSection}>
            <div style={styles.contentHeader}>
              <button 
                style={styles.closeButton}
                onClick={() => setSelectedTool(null)}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#e5e7eb';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f3f4f6';
                }}
              >
                ✕
              </button>
            </div>
            <div style={styles.pdfViewer}>
              {selectedTool.imageFiles ? (
                // แสดงหลายรูป
                <div style={{
                  padding: '20px',
                  background: 'white',
                  borderRadius: '12px',
                  maxHeight: '80vh',
                  overflow: 'auto'
                }}>
                  <h2 style={{
                    marginBottom: '30px',
                    color: '#1f2937',
                    fontSize: '24px',
                    textAlign: 'center'
                  }}>
                    {selectedTool.name}
                  </h2>
                  <div style={{
                    display: 'grid',
                    gap: '20px',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
                  }}>
                    {selectedTool.imageFiles.map((imageSrc, index) => (
                      <div key={index} style={{
                        textAlign: 'center'
                      }}>
                        <img 
                          src={imageSrc}
                          alt={`${selectedTool.name} - รูปที่ ${index + 1}`}
                          style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '8px',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            marginBottom: '10px'
                          }}
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                        <div style={{
                          display: 'none',
                          padding: '20px',
                          color: '#6b7280',
                          fontSize: '14px',
                          background: '#f9fafb',
                          borderRadius: '8px'
                        }}>
                          ไม่สามารถโหลดรูปที่ {index + 1} ได้
                        </div>
                        <p style={{
                          color: '#6b7280',
                          fontSize: '14px',
                          margin: 0
                        }}>
                          รูปที่ {index + 1}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : selectedTool.imageFile ? (
                // แสดงรูปเดียว
                <div style={{
                  padding: '20px',
                  textAlign: 'center',
                  background: 'white',
                  borderRadius: '12px',
                  maxHeight: '80vh',
                  overflow: 'auto'
                }}>
                  <h2 style={{
                    marginBottom: '20px',
                    color: '#1f2937',
                    fontSize: '24px'
                  }}>
                    {selectedTool.name}
                  </h2>
                  <img 
                    src={selectedTool.imageFile}
                    alt={selectedTool.name}
                    style={{
                      maxWidth: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div style={{
                    display: 'none',
                    padding: '40px',
                    color: '#6b7280',
                    fontSize: '16px'
                  }}>
                    ไม่สามารถโหลดรูปภาพได้ กรุณาตรวจสอบไฟล์
                  </div>
                </div>
              ) : selectedTool.pdfFile ? (
                // แสดง PDF iframe
                <iframe 
                  src={selectedTool.pdfFile}
                  width="100%" 
                  height="100%"
                  style={{ 
                    border: 'none', 
                    borderRadius: '12px',
                    minHeight: '80vh'
                  }}
                  title={selectedTool.name}
                />
              ) : (
                // แสดง content แบบเดิม
                <div style={styles.bookPage}>
                  <div style={styles.pageHeader}>
                    <h1 style={styles.pageTitle}>{selectedTool.content.title}</h1>
                    <p style={styles.pageSubtitle}>{selectedTool.content.subtitle}</p>
                  </div>
                  
                  {selectedTool.content.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex}>
                      <h2 style={styles.sectionTitle}>{section.title}</h2>
                      {section.content.map((item, itemIndex) => (
                        <div key={itemIndex} style={styles.bulletPoint}>
                          <div style={styles.bulletDot}></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Empty State */}
        {searchedTools.length === 0 && (
          <div style={styles.emptyState}>
            <div style={styles.emptyIcon}>
              <Search size={48} color="#9ca3af" />
            </div>
            <h3 style={styles.emptyTitle}>ไม่พบเครื่องมือที่ค้นหา</h3>
            <p style={styles.emptyText}>ลองใช้คำค้นหาอื่น หรือเลือกหมวดหมู่ที่แตกต่างกัน</p>
          </div>
        )}

        
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <p>&copy; 2025 WolfHealth Toolkit. กระบี่พิชิตเป้าหมาย</p>
        </div>
      </footer>
    </div>
  );
};

export default SalesToolkit;